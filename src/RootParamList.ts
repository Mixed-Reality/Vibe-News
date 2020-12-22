import { RouteProp } from "@react-navigation/native"
import { StackNavigationProp } from "@react-navigation/stack/lib/typescript/src/types"
import { NewsArticle, newsType } from "./Types"

export type RootStackParamList = {
    Home: undefined,
    Posts: {newsType: newsType, header: string} 
    Article: {article: NewsArticle}
}

export type PostsScreenRouteProp = RouteProp<RootStackParamList, "Posts">

export type ArticleScreenRouteProp = RouteProp<RootStackParamList, "Article">

export type RootParamsProps<T extends keyof RootStackParamList> = {
    route: PostsScreenRouteProp;
    navigation: StackNavigationProp<RootStackParamList, T>
}

export type ArtcileScreenProps<T extends keyof RootStackParamList>={
    route: ArticleScreenRouteProp
    navigation: StackNavigationProp<RootStackParamList, T>
}