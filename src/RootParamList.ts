import { RouteProp } from "@react-navigation/native"
import { StackNavigationProp } from "@react-navigation/stack/lib/typescript/src/types"
import { newsType } from "./Types"

export type RootStackParamList = {
    Home: undefined,
    Posts: {newsType: newsType, header: string} 
}

export type PostsScreenRouteProp = RouteProp<RootStackParamList, "Posts">

export type RootParamsProps<T extends keyof RootStackParamList> = {
    route: PostsScreenRouteProp;
    navigation: StackNavigationProp<RootStackParamList, T>
}