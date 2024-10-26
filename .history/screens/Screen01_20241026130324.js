import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Screen01 = () => {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                {/* Header */}
                <View style={styles.header}>
                    <View style={styles.headerTop}>
                        <Image
                            source={require('../assets/data/logoicon.png')}
                            style={styles.logoIcon}
                            resizeMode="contain"
                        />
                        <View style={styles.searchContainer}>
                            <TextInput
                                placeholder="Search here"
                                style={styles.searchInput}
                            />
                            <Image
                                source={require('../assets/data/findicon.png')}
                                style={styles.searchIcon}
                                resizeMode="contain"
                            />
                        </View>
                    </View>

                    <View style={styles.welcomeContainer}>
                        <Image
                            source={require('../assets/data/personicon.png')}
                            style={styles.personIcon}
                            resizeMode="cover"
                        />
                        <View style={styles.welcomeTextContainer}>
                            <Text style={styles.welcomeText}>Welcome</Text>
                            <Text style={styles.userName}>Dona Stroupe</Text>
                        </View>
                        <Image
                            source={require('../assets/data/ringicon.png')}
                            style={styles.ringIcon}
                            resizeMode="contain"
                        />
                    </View>
                </View>

                {/* Content */}
                <View style={styles.content}>
                    {/* Category */}
                    <View style={styles.categoryHeader}>
                        <Text style={styles.sectionTitle}>Category</Text>
                        <Image
                            source={require('../assets/data/3gach.png')}
                            style={styles.menuIcon}
                            resizeMode="contain"
                        />
                    </View>

                    {/* Category list */}
                    <View style={styles.categoryList}>
                        {category.map((item, index) => (
                            <View key={index} style={styles.categoryItem}>
                                <Image
                                    source={{ uri: item.image }}
                                    style={styles.categoryImage}
                                    resizeMode="contain"
                                />
                                <Text style={styles.categoryText}>{item.name}</Text>
                            </View>
                        ))}
                    </View>

                    {/* Location */}
                    <View style={styles.locationHeader}>
                        <Text style={styles.sectionTitle}>Popular Destination</Text>
                        <Image
                            source={require('../assets/data/3gach.png')}
                            style={styles.menuIcon}
                            resizeMode="contain"
                        />
                    </View>

                    {/* Location list */}
                    <FlatList
                        data={location}
                        keyExtractor={(item, index) => index.toString()}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        contentContainerStyle={styles.locationList}
                        renderItem={({ item }) => (
                            <Image
                                source={{ uri: item.image }}
                                style={styles.locationImage}
                                resizeMode="cover"
                            />
                        )}
                    />

                    {/* Recommended */}
                    <Text style={styles.sectionTitle}>Recommended</Text>
                    <View style={styles.recommendedContainer}>
                        <Image
                            source={require('../assets/data/photo4.png')}
                            style={styles.recommendedImage}
                        />
                        <Image
                            source={require('../assets/data/photo5.png')}
                            style={styles.recommendedImage}
                        />
                    </View>
                </View>
            </ScrollView>

            {/* Footer */}
            <View style={styles.footer}>
                {footer.map((item, index) => (
                    <View key={index} style={styles.footerItem}>
                        <Image
                            source={item.image}
                            style={styles.footerIcon}
                            resizeMode="cover"
                        />
                        <Text style={styles.footerText}>{item.name}</Text>
                    </View>
                ))}
            </View>
        </SafeAreaView>
    );
}

export default Screen01

const styles = StyleSheet.create({
    container: { flex: 1 },
    header: {
        backgroundColor: '#5959b3',
        height: 160,
        paddingHorizontal: 40,
        justifyContent: 'center',
    },
    headerTop: { flexDirection: 'row', alignItems: 'center', gap: 10 },
    logoIcon: { width: 46 },
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#fff',
        paddingHorizontal: 10,
        height: 36,
        borderRadius: 10,
        flex: 1,
    },
    searchInput: { flex: 1, height: '100%', outline: 'none' },
    searchIcon: { width: 24 },
    welcomeContainer: { flexDirection: 'row', alignItems: 'center' },
    personIcon: { width: 40, height: 40, borderRadius: 20, marginLeft: 5 },
    welcomeTextContainer: { marginLeft: 10 },
    welcomeText: { color: '#fff', fontSize: 16, fontWeight: '700' },
    userName: { color: '#fff', fontSize: 12 },
    ringIcon: { width: 40, marginLeft: 'auto' },
    content: { paddingHorizontal: 40, paddingBottom: 20 },
    categoryHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    sectionTitle: { fontSize: 18, fontWeight: '500' },
    menuIcon: { width: 30 },
    categoryList: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        gap: 10,
        marginTop: 20,
    },
    categoryItem: { alignItems: 'center', width: '25%' },
    categoryImage: { width: 70, height: 70 },
    categoryText: { fontSize: 12, marginTop: 5 },
    locationHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 10,
    },
    locationList: { marginTop: 10 },
    locationImage: { width: 102, height: 106, borderRadius: 10, marginRight: 10 },
    recommendedContainer: { flexDirection: 'row', marginTop: 10, gap: 10 },
    recommendedImage: { flex: 1, height: 120, borderRadius: 6 },
    footer: {
        backgroundColor: '#5959b3',
        height: 90,
        paddingHorizontal: 40,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    footerItem: { alignItems: 'center' },
    footerIcon: { width: 40, height: 40 },
    footerText: { color: '#fff', fontSize: 12, marginTop: 4 },
});