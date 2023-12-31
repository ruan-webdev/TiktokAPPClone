import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { Home } from '../pages/home'
import { Search } from '../pages/search'
import { Profile } from '../pages/profile'
import { Inbox } from '../pages/inbox'
import { New } from '../pages/new'
import { ButtonNew } from '../components/ButtonNew'

import { Ionicons } from '@expo/vector-icons'

const Tab = createBottomTabNavigator();

export function Routes() {
    return (
        <Tab.Navigator screenOptions={{
            headerShown: false,
            // tabBarShowLabel: false,

            tabBarStyle: {
                backgroundColor: '#000',
                borderTopWidth: 0,
            },

            tabBarActiveTintColor: '#fff',
        }}>

            <Tab.Screen name="Home" component={Home} options={{
                tabBarIcon: ({ focused, size, color }) => {
                    if (focused) {
                        return <Ionicons name="home" size={size} color={color} />
                    }
                    return <Ionicons name="home-outline" size={size} color={color} />
                }
             }}
            />

            <Tab.Screen name="Friends" component={Search} options={{
                
                tabBarIcon: ({ focused, size, color }) => {
                    if (focused) {
                        return <Ionicons name="people" size={size} color={color} />
                    }
                    return <Ionicons name="people-outline" size={size} color={color} />
                }
             }}
             />

            <Tab.Screen name="New" component={New}  options={{

                tabBarLabel: '',
                
                tabBarIcon: ({ size }) => {
                    return <ButtonNew size={size} />
                }
            }} />

            <Tab.Screen name="Inbox" component={Inbox} options={{
                tabBarIcon: ({ focused, size, color }) => {
                    if (focused) {
                        return <Ionicons name="ios-chatbubble-ellipses" size={size} color={color} />
                    }
                    return <Ionicons name="ios-chatbubble-ellipses-outline" size={size} color={color} />
                }
             }} />

            <Tab.Screen name="Me" component={Profile} options={{
                tabBarIcon: ({ focused, size, color }) => {
                    if (focused) {
                        return <Ionicons name="person" size={size} color={color} />
                    }
                    return <Ionicons name="person-outline" size={size} color={color} />
                }
             }} />

        </Tab.Navigator>
    )
}
