import  { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { Home } from '../pages/home'
import { Search } from '../pages/search'
import { Profile } from '../pages/profile'
import { Inbox } from '../pages/inbox'
import { New } from '../pages/new'

import { Ionicons } from '@expo/vector-icons'

const Tab = createBottomTabNavigator();

export function Routes() {
    return (
        <Tab.Navigator screenOptions={{
             headerShown: false,
             tabBarShowLabel: false,
             
             tabBarStyle: {
                    backgroundColor: '#000',
                    borderTopWidth: 0,
             },
        }}>
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Search" component={Search} />
            <Tab.Screen name="New" component={New} />
            <Tab.Screen name="Inbox" component={Inbox} />
            <Tab.Screen name="Profile" component={Profile} />
        </Tab.Navigator>
    )
}
