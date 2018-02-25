import * as React from "react"
import {
    Platform,
    StyleSheet,
    Text,
    View,
    ListView,
    Image,
} from "react-native"
import Post from "./Post";

interface State {
    posts: any[]
}

export default class App extends React.Component<{}, State> {
    constructor(props: {}) {
        super(props)
        this.state = {
            posts: []
        }
    }

    async componentDidMount() {
        const posts = await fetch("https://mstdn.otyakai.xyz/api/v1/timelines/public").then(r => r.json())
        this.setState({
            posts
        })
    }

    dataSource = new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2
    })

    render() {
        const dataSource = this.dataSource.cloneWithRows(this.state.posts)
        return <View style={styles.container}>
            <ListView
                dataSource={dataSource}
                renderRow={post => <Post post={post}/>} />
        </View>
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});