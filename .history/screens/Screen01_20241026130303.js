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

const styles = StyleSheet.create({})