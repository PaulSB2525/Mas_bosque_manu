import { StyleSheet, View, TouchableOpacity, Text, TextInput, Alert } from "react-native";
import { useState, useEffect } from "react";
import { FontAwesome5 } from "@expo/vector-icons";

export default function SuppliesSection({ data, onUpdate }) {
    const [contadores, setContadores] = useState({});
    const [showAllOptions, setShowAllOptions] = useState(false);
    const [selectedInsumos, setSelectedInsumos] = useState([]);
    const [customSupply, setCustomSupply] = useState('');
    const [customQuantity, setCustomQuantity] = useState('1');

    const insumosDisponibles = [
        { id: 1, nombre: "Jabón quirúrgico" },
        { id: 2, nombre: "Gasas Esteriles" },
        { id: 3, nombre: "Vendas 20cm" },
        { id: 4, nombre: "Vendas 10cm" },
        { id: 5, nombre: "Vendas 5cm" },
        { id: 6, nombre: "Cinta de Tela" },
        { id: 7, nombre: "Botella de Agua" },
        { id: 8, nombre: "Algodon" },
        { id: 9, nombre: "Guantes" },
        { id: 10, nombre: "Cubrebocas" },
        { id: 11, nombre: "Gel Topico" },
        { id: 12, nombre: "Parches Protectores (Grandes)" },
    ];

    // Inicializar contadores basado en datos existentes
    useEffect(() => {
        const initialContadores = {};
        const initialSelected = [];

        data.forEach(insumo => {
            const existingInsumo = insumosDisponibles.find(i => i.nombre === insumo.nombre);
            if (existingInsumo) {
                initialContadores[existingInsumo.id] = insumo.cantidad;
                initialSelected.push(existingInsumo.id);
            }
        });

        setContadores(initialContadores);
        setSelectedInsumos(initialSelected);
    }, []);

    const incrementar = (id) => {
        const nuevoValor = (contadores[id] || 0) + 1;
        const nuevosContadores = { ...contadores, [id]: nuevoValor };
        setContadores(nuevosContadores);
        updateBackend(nuevosContadores);
    };

    const decrementar = (id) => {
        if (!contadores[id] || contadores[id] <= 0) return;

        const nuevoValor = contadores[id] - 1;
        const nuevosContadores = { ...contadores, [id]: nuevoValor };
        setContadores(nuevosContadores);

        if (nuevoValor === 0) {
            setSelectedInsumos(prev => prev.filter(itemId => itemId !== id));
        }

        updateBackend(nuevosContadores);
    };

    const updateBackend = (contadoresObj) => {
        const insumosPredefinidos = Object.entries(contadoresObj)
            .filter(([_, cantidad]) => cantidad > 0)
            .map(([id, cantidad]) => ({
                nombre: insumosDisponibles.find(i => i.id === parseInt(id)).nombre,
                cantidad
            }));

        // Mantener los insumos personalizados (aquellos cuyo nombre no está en insumosDisponibles)
        const insumosPersonalizados = data.filter(insumo =>
            !insumosDisponibles.some(i => i.nombre === insumo.nombre)
        );

        onUpdate([...insumosPredefinidos, ...insumosPersonalizados]);
    };

    const agregarInsumo = (insumo) => {
        if (!selectedInsumos.includes(insumo.id)) {
            setSelectedInsumos(prev => [...prev, insumo.id]);
        }

        incrementar(insumo.id);
    };

    const quitarInsumo = (id) => {
        setSelectedInsumos(prev => prev.filter(itemId => itemId !== id));

        const nuevosContadores = { ...contadores };
        delete nuevosContadores[id];
        setContadores(nuevosContadores);

        updateBackend(nuevosContadores);
    };

    const agregarCustomInsumo = () => {
        if (!customSupply.trim()) {
            Alert.alert("Por favor ingrese el nombre del insumo");
            return;
        }

        const cantidad = parseInt(customQuantity) || 1;
        const nuevoInsumo = {
            nombre: customSupply.trim(),
            cantidad: cantidad
        };

        const nuevosInsumos = [...data, nuevoInsumo];
        onUpdate(nuevosInsumos);

        // Limpiar campos
        setCustomSupply('');
        setCustomQuantity('1');

        Alert.alert("Éxito", "Insumo personalizado agregado");
    };

    const eliminarInsumoPersonalizado = (targetIndex) => {
        const insumosPersonalizados = data.filter(insumo =>
            !insumosDisponibles.some(i => i.nombre === insumo.nombre)
        );
        const targetInsumo = insumosPersonalizados[targetIndex];

        if (targetInsumo) {
            const nuevosInsumos = data.filter(item => item !== targetInsumo);
            onUpdate(nuevosInsumos);
        }
    };

    const toggleShowOptions = () => {
        setShowAllOptions(!showAllOptions);
    };

    return (
        <>
            <Text style={styles.title}>Insumos</Text>
            <View style={styles.container}>

                {/* Sección para insumo personalizado */}
                <View style={styles.customSection}>
                    <Text style={styles.subtitulo}>Agregar insumo personalizado:</Text>
                    <View style={styles.customInputs}>
                        <TextInput placeholderTextColor="#888888"
                            style={styles.customTextInput}
                            placeholder="Nombre: "
                            value={customSupply}
                            onChangeText={setCustomSupply}
                        />
                        <TextInput placeholderTextColor="#888888"
                            style={styles.customQuantityInput}
                            placeholder="Cant."
                            keyboardType="numeric"
                            value={customQuantity}
                            onChangeText={setCustomQuantity}
                        />
                        <TouchableOpacity
                            style={styles.customAddButton}
                            onPress={agregarCustomInsumo}
                        >
                            <Text style={styles.customAddButtonText}>+</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                {/* Botón para mostrar/ocultar todas las opciones */}
                <TouchableOpacity
                    style={styles.botonToggle}
                    onPress={toggleShowOptions}
                >
                    <FontAwesome5
                        name={showAllOptions ? "chevron-up" : "chevron-down"}
                        size={16}
                        color="#434443d3"
                    />
                    <Text style={styles.botonToggleTexto}>
                        {showAllOptions ? "Ocultar opciones" : "Ver todos los insumos"}
                    </Text>
                </TouchableOpacity>

                {/* Lista de insumos seleccionados (siempre visible) */}
                <View style={styles.listaSeleccionados}>
                    <Text style={styles.subtitulo}>Insumos utilizados:</Text>

                    {/* Insumos de la lista */}
                    {selectedInsumos
                        .filter(id => contadores[id] > 0)
                        .map(id => {
                            const insumo = insumosDisponibles.find(i => i.id === id);
                            return (
                                <View key={id} style={styles.insumoSeleccionado}>
                                    <View style={styles.insumoInfo}>
                                        <Text style={styles.insumoNombreSeleccionado}>
                                            {insumo.nombre}
                                        </Text>
                                        <View style={styles.contadorContainer}>
                                            <TouchableOpacity
                                                style={styles.botonContador}
                                                onPress={() => decrementar(id)}
                                            >
                                                <Text style={styles.botonTexto}>-</Text>
                                            </TouchableOpacity>

                                            <Text style={styles.cantidadTexto}>
                                                {contadores[id] || 0}
                                            </Text>

                                            <TouchableOpacity
                                                style={styles.botonContador}
                                                onPress={() => incrementar(id)}
                                            >
                                                <Text style={styles.botonTexto}>+</Text>
                                            </TouchableOpacity>
                                        </View>
                                    </View>

                                    <TouchableOpacity
                                        style={styles.botonQuitar}
                                        onPress={() => quitarInsumo(id)}
                                    >
                                        <Text style={styles.botonQuitarTexto}>×</Text>
                                    </TouchableOpacity>
                                </View>
                            );
                        })
                    }

                    {/* Insumos personalizados */}
                    {data.filter(insumo => 
                        !insumosDisponibles.some(i => i.nombre === insumo.nombre)
                    ).map((insumo, index) => (
                        <View key={`custom-${index}`} style={styles.insumoSeleccionado}>
                            <View style={styles.insumoInfo}>
                                <Text style={styles.insumoNombreSeleccionado}>
                                    {insumo.nombre} (personalizado)
                                </Text>
                                <Text style={styles.cantidadTexto}>
                                    Cantidad: {insumo.cantidad}
                                </Text>
                            </View>

                            <TouchableOpacity
                                style={styles.botonQuitar}
                                onPress={() => eliminarInsumoPersonalizado(index)}
                            >
                                <Text style={styles.botonQuitarTexto}>×</Text>
                            </TouchableOpacity>
                        </View>
                    ))}
                </View>

                {/* Lista completa de opciones (solo visible cuando showAllOptions es true) */}
                {showAllOptions && (
                    <View style={styles.listaCompleta}>
                        <Text style={styles.subtitulo}>Seleccionar insumos:</Text>
                        <View style={styles.grid}>
                            {insumosDisponibles.map(insumo => {
                                const estaSeleccionado = selectedInsumos.includes(insumo.id);
                                const cantidad = contadores[insumo.id] || 0;

                                return (
                                    <TouchableOpacity
                                        key={insumo.id}
                                        style={[
                                            styles.botonInsumo,
                                            estaSeleccionado && styles.botonInsumoSeleccionado
                                        ]}
                                        onPress={() => agregarInsumo(insumo)}
                                    >
                                        <Text style={[
                                            styles.botonInsumoTexto,
                                            estaSeleccionado && styles.botonInsumoTextoSeleccionado
                                        ]}>
                                            {insumo.nombre}
                                            {cantidad > 0 && (
                                                <Text style={styles.cantidadEnBoton}> ({cantidad})</Text>
                                            )}
                                        </Text>
                                    </TouchableOpacity>
                                );
                            })}
                        </View>

                        <TouchableOpacity
                            style={styles.botonCerrar}
                            onPress={() => setShowAllOptions(false)}
                        >
                            <Text style={styles.botonCerrarTexto}>Listo</Text>
                        </TouchableOpacity>
                    </View>
                )}
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 10,
        marginRight: 15,
        marginLeft: 5,
        padding: 20,
        backgroundColor: 'white',
        borderRadius: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    
    title: {
        fontSize: 30,
        fontWeight: "600",
        color: "#2f3c42",
        marginTop: 50
    },
    
    customSection: {
        marginBottom: 20,
        padding: 15,
        backgroundColor: '#f8f9fa',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#e9ecef'
    },
    
    customInputs: {
        flexDirection: 'row',
        gap: 10,
        marginTop: 10
    },
    
    customTextInput: {
        flex: 3,
        backgroundColor: 'white',
        padding: 12,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#dee2e6',
        fontSize: 14
    },
    
    customQuantityInput: {
        flex: 1,
        backgroundColor: 'white',
        padding: 12,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#dee2e6',
        fontSize: 14,
        textAlign: 'center'
    },
    
    customAddButton: {
        backgroundColor: '#4caf4fcb',
        width: 40,
        height: 40,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center'
    },
    
    customAddButtonText: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold'
    },
    
    botonToggle: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#dadddc91',
        padding: 12,
        borderRadius: 8,
        marginBottom: 20,
        alignSelf: 'flex-start',
    },

  botonToggleTexto: {
    marginLeft: 8,
    fontSize: 18,
    fontWeight: '600',
    color: '#696b69',
  },
  subtitulo: {
    fontSize: 16,
    fontWeight: '600',
    color: '#495057',
    marginBottom: 10,
  },
  listaSeleccionados: {
    minHeight: 80,
    marginBottom: 20,
  },
  insumoSeleccionado: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f8f9fa',
    padding: 12,
    borderRadius: 8,
    marginBottom: 8,
    borderWidth: 1,
    borderColor: '#e9ecef',
  },
  insumoInfo: {
    flex: 1,
  },
  insumoNombreSeleccionado: {
    fontSize: 15,
    fontWeight: '600',
    color: '#2c3e50',
    marginBottom: 6,
  },
  contadorContainer: { 
    flexDirection: 'row', 
    alignItems: 'center',
  },
  botonContador: { 
    backgroundColor: '#4caf8ead', 
    width: 28, 
    height: 28, 
    borderRadius: 14, 
    justifyContent: 'center', 
    alignItems: 'center' 
  },
  botonTexto: { 
    color: 'white', 
    fontSize: 16, 
    fontWeight: 'bold' 
  },
  cantidadTexto: { 
    marginHorizontal: 12, 
    fontSize: 16,
    fontWeight: '600',
    color: '#2c3e50',
  },
  botonQuitar: {
    marginLeft: 8,
    width: 26,
    height: 26,
    borderRadius: 13,
    backgroundColor: '#ff6b6bc2',
    justifyContent: 'center',
    alignItems: 'center',
  },
  botonQuitarTexto: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    lineHeight: 18,
  },
  sinInsumos: {
    fontSize: 14,
    color: '#6c757d',
    fontStyle: 'italic',
    textAlign: 'center',
    padding: 10,
  },
  // Estilos para la lista completa de opciones
  listaCompleta: {
    backgroundColor: '#f8f9fa',
    borderRadius: 10,
    padding: 15,
    borderWidth: 1,
    borderColor: '#e9ecef',
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  botonInsumo: {
    width: '48%',
    backgroundColor: 'white',
    padding: 12,
    borderRadius: 8,
    marginBottom: 8,
    borderWidth: 1,
    borderColor: '#dee2e6',
    alignItems: 'center',
  },
  botonInsumoSeleccionado: {
    backgroundColor: '#a8aaa888',
    borderColor: '#646d64b7',
    borderWidth: 2,
  },
  botonInsumoTexto: {
    fontSize: 13,
    color: '#495057',
    textAlign: 'center',
  },
  botonInsumoTextoSeleccionado: {
    color: '#2c3e50de',
    fontWeight: '600',
  },
  cantidadEnBoton: {
    color: '#3d3f3d',
    fontWeight: '700',
  },
  botonCerrar: {
    backgroundColor: '#4caf4fcb',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  botonCerrarTexto: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
});