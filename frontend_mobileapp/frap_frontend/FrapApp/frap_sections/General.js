import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from "react-native";
import { FontAwesome5, AntDesign } from "@expo/vector-icons";
import { useState, useEffect } from "react";
import DateTimePicker from '@react-native-community/datetimepicker';

export default function GeneralSection({ data, onUpdate }) {
    const [showDate, setShowDate] = useState(false);
    const [showTime, setShowTime] = useState(false);
    const [showLocations, setShowLocations] = useState(false);
    const [time, setTime] = useState(new Date());
    const [date, setDate] = useState(new Date());
    const [location, setLocation] = useState("Seleccionar...");

    const fecha = date.toLocaleDateString('es-ES', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
    });
    
    const hora = time.toLocaleTimeString('en-Es', {
        hour: '2-digit',
        minute: '2-digit',
    });

    useEffect(() => {
        if (data.fecha_hora) {
            const dateObj = new Date(data.fecha_hora);
            setDate(dateObj);
            setTime(dateObj);
        }
        
        if (data.lugar_nombre) {
            setLocation(data.lugar_nombre);
        }
    }, []);

    useEffect(() => {
        const combinedDateTime = new Date(
            date.getFullYear(),
            date.getMonth(),
            date.getDate(),
            time.getHours(),
            time.getMinutes(),
            time.getSeconds()
        );

        onUpdate({ fecha_hora: combinedDateTime.toISOString() });
        
    }, [date, time]);

    const locations = [
        "1/2 Mosca", "Mosca", "Garrison", "Glorieta", "Huevona",
        "Arbol", "Toboganes", "Toboganes Viejo", "Hermosisima",
        "Hollo Negro", "Pinitos", "Espinazo", "1/2 Espinazo", 
        "Vaca Muerta", "Arenosas", "Brujitas", "Pipila", "Geotermica",
        "Obsidiana", "Campeon del Mundo", "Pirinola"
    ];

    const handleLocationSelect = (selectedLocation) => {
        setLocation(selectedLocation);
        onUpdate({ lugar_nombre: selectedLocation });
        setShowLocations(false);
    };

    return (
        <>
            <Text style={styles.title}>General</Text>

            {showDate && (
                <DateTimePicker 
                    value={date}
                    mode="date"
                    onChange={(event, newDate) => {
                        setShowDate(false);
                        if (newDate) {
                            setDate(newDate);
                        }
                    }}
                />
            )}

            {showTime && (
                <DateTimePicker 
                    value={time}
                    mode="time"
                    onChange={(event, newTime) => {
                        setShowTime(false);
                        if (newTime) {
                            setTime(newTime);
                        }
                    }}
                />
            )}

            <View style={styles.container}>
                <Text style={styles.subTitle}>Fecha y Hora</Text>
                    
                <View style={styles.subContainer}>
                    <TouchableOpacity 
                        style={styles.dateTimeButton}
                        onPress={() => setShowDate(true)}
                    >
                        <FontAwesome5 
                            name="calendar" 
                            size={25} 
                            color="rgb(126, 118, 118)"
                        />
                        <Text style={styles.boldText}>{fecha}</Text>
                    </TouchableOpacity>

                    <TouchableOpacity 
                        style={styles.dateTimeButton}
                        onPress={() => setShowTime(true)}
                    >
                        <FontAwesome5 
                            name="clock" 
                            size={25} 
                            color="rgb(126, 118, 118)"
                        />
                        <Text style={styles.boldText}>{hora}</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.container}>
                <Text style={styles.subTitle}>Lugar de Ocurrencia</Text>

                    <TouchableOpacity 
                        onPress={() => setShowLocations(!showLocations)}
                        style={styles.locationsButton}
                    >

                        <View style={styles.headerDropDown}>
                            <Text style={[styles.boldText, {fontSize: 17}]}>{location}</Text>
                            <AntDesign 
                                name={showLocations ? "up" : "down"} 
                                size={20}
                                color="rgb(95, 89, 89)"
                            /> 
                        </View>

                        {showLocations && (
                            <>
                                <View style={{flex: 1, borderWidth: 1, marginTop: 10, borderColor: '#e0e0e0'}}/>

                                <ScrollView 
                                    style={styles.dropDown}
                                    nestedScrollEnabled={true}
                                >
                                    {locations.map((loc, index) => {
                                        return (
                                            <TouchableOpacity 
                                                onPress={() => handleLocationSelect(loc)}
                                                key={index}
                                                style={{marginTop: 8, paddingVertical: 10}}
                                            >
                                                <Text style={{color: "#2f3c42", fontSize: 18}}>{loc}</Text>
                                            </TouchableOpacity>
                                        );
                                    })}
                                </ScrollView>
                            </>
                        )}
                    </TouchableOpacity>
                </View>
        </>
    );
};

const styles = StyleSheet.create({
    title: {
        fontSize: 30,
        fontWeight: "700",
        color: "#2f3c42"
    },

    subTitle: {
        fontSize: 20,
        fontWeight: "500",
        color: "#2f3c42"
    },

    container: {
        borderRadius: 15,
        backgroundColor: "white",
        paddingVertical: 15,
        paddingHorizontal: 20,
        marginTop: 20,
        marginRight: 15,
        marginLeft: 5,
        boxShadow: "0px 2px 10px rgb(167, 161, 161)"
    },

    subContainer: {
        position: "relative",
        flexDirection: "row",
        justifyContent: "space-between",
        gap: 10
    },

    dateTimeButton: {
        marginTop: 15,
        width: "48%",
        gap: 10,
        paddingVertical: 12,
        borderRadius: 15,
        backgroundColor: "#eef1f3",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        paddingHorizontal: 15
    },

    locationsButton: {
        marginTop: 15,
        width: "100%",
        paddingVertical: 12,
        borderRadius: 15,
        backgroundColor: "#eef1f3",
        paddingHorizontal: 20
    },

    headerDropDown: {
        flexDirection: "row", 
        justifyContent: "space-between", 
        flex: 1,
        alignItems: "center"
    },

    boldText: {
        fontWeight: "bold", 
        fontSize: 16
    },

    dropDown: {
        backgroundColor: "#eef1f3",
        marginTop: 10,
        maxHeight: 300,
        paddingHorizontal: 10
    },
});