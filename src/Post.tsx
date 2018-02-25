import * as React from "react"
import {
    View,
    Image,
    Text,
    StyleSheet,
} from "react-native"

interface Props {
    post: any
}

export default class Post extends React.Component<Props> {
    render() {
        const originalPost = this.props.post
        const post = originalPost.reblog || originalPost
        return <View style={styles.container}>
            {originalPost.reblog && <View style={styles.boostedStatus}/>}
            <View>
                <View style={styles.iconWrapper} >
                    <Image source={{uri: post.account.avatar}} style={styles.icon}/>
                    {originalPost.reblog && <Image source={{uri: originalPost.account.avatar}} style={styles.boostedUserIcon}/>}
                </View>
            </View>
            <View style={styles.mainWrapper}>
                <View style={styles.nameWrapper}>
                    <Text style={{flex: 1}}>{post.account.display_name}</Text>
                    <Text>{post.created_at}</Text>
                </View>
                <Text>{post.content}</Text>
            </View>
        </View>
    }
}

const iconSize = 36

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        paddingLeft: 8,
        paddingTop: 4,
        paddingBottom: 4,
        paddingRight: 8,
    },
    boostedStatus: {
        position: "absolute",
        left: 0,
        top: 0,
        bottom: 0,
        width: 3,
        marginRight: 8 - 3,
        backgroundColor: "green"
    },
    iconWrapper: {
        position: "relative",
        marginRight: 8,
    },
    icon: {
        height: iconSize,
        width: iconSize,
    },
    boostedUserIcon: {
        width: iconSize / 2,
        height: iconSize / 2,
        position: "absolute",
        bottom: 0,
        right: 0,
    },
    mainWrapper: {
        flex: 1,
    },
    nameWrapper: {
        flexDirection: "row",
        flex: 1,
    }
})