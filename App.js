const groceryItems = [
    {
        item: 'Cola',
        brand: 'Pepsi',
        units: '12 pack',
        quantity: 1,
        isPurchased: false
    },
    {
        item: 'Chicken Wings',
        brand: 'Tyson',
        units: '6 pack',
        quantity: 2,
        isPurchased: true
    },
    {
        item: 'Chips',
        brand: 'Ruffles',
        units: '5oz',
        quantity: 3,
        isPurchased: true
    }
]

class App extends React.Component{

    state = {
        groceries: groceryItems,
        item: '',
        brand: '',
        units: '',
        quantity: 0,
        isPurchased: true,
        cartItems: []
    }

    addToCart = item => {
        this.setState({
            cartItems: [item, ...this.state.cartItems]
        })
    }

    handleChange = (event) => {
        this.setState({
            [event.target.id]: event.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        const newItem = {
            item: this.state.item,
            brand: this.state.brand,
            units: this.state.units,
            quantity: parseInt(this.state.quantity),
            isPurchased: true
        }

        // console.log(typeof parseInt(newItem.price))
        this.setState({
            groceries: [newItem, ...this.state.groceries],
            item: '',
            brand: '',
            units: '',
            quantity: 0,
        })

    }

    render(){
        return(
            <div>
                <div id="form">
                    <h3>Add New Item</h3><br></br>
                    <div id='create-product'>
                        <form onSubmit={this.handleSubmit}>
                            <label htmlFor='item'>Item:</label>
                            <input id='item' type='text' value={this.state.item} onChange={this.handleChange} /><br></br>
                            <label htmlFor='brand'>Brand:</label>
                            <input id='brand' type='text' value={this.state.brand} onChange={this.handleChange} /><br></br>
                            <label htmlFor='units'>Units:</label>
                            <input id='units' type='text' value={this.state.units} onChange={this.handleChange} /><br></br>
                            <label htmlFor='quantity'>Quantity:</label>
                            <input id='quantity' type='number' value={this.state.quantity} onChange={this.handleChange} /><br></br>
                            <input type='submit' />
                        </form>
                    </div>
                </div>

                <h3>Please Purchase our Products</h3>
                <ul>
                    {

                        this.state.groceries.map(grocery =>{
                            if(grocery.isPurchased){
                            return(
                                <p>{grocery.item} {grocery.units} {grocery.quantity}</p>
                                )
                            }
                        })

                    }
                </ul>
            </div>
        )
    }
}

ReactDOM.render(
    <App/>,
    document.querySelector("#container")
)