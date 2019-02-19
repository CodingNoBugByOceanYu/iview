import '../assets/styles/footer.styl'

export default {
    data() {
        return {
            author: 'Hugh hai'
        }
    },
    render() {
        return (
            <div id="footer" >
                <span> written By {this.author} </span>
            </div>
        )
    }
}