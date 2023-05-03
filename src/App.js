import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Items from "./components/Items";
import Categories from "./components/Categories";
import ShowFullItem from "./components/ShowFullItem";


class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      orders: [],
      currentItems: [],
      items: [
        {
          id: 1,
          title: 'Shirt N1',
          img: 'maika1.jpg',
          desc: 'Lorem ipsum dolor sit amet, asdasdasdasdasdasd',
          category: 'T-Shirt',
          price: '49.99'
        },
        {
          id: 2,
          title: 'Shirt N2',
          img: 'maika2.jpg',
          desc: 'Lorem ipsum dolor sit amet, asdasdasdasdasdasd',
          category: 'T-Shirt',
          price: '100.99'
        },
        {
          id: 3,
          title: 'Shirt N3',
          img: 'maika3.jpg',
          desc: 'Lorem ipsum dolor sit amet, asdasdasdasdasdasd',
          category: 'Shirt',
          price: '12.99'
        },
        {
          id: 4,
          title: 'T-Shirt N1',
          img: 'maika4.jpg',
          desc: 'Lorem ipsum dolor sit amet, asdasdasdasdasdasd',
          category: 'T-Shirt',
          price: '32.99'
        },
        {
          id: 5,
          title: 'T-Shirt N2',
          img: 'maika5.jpg',
          desc: 'Lorem ipsum dolor sit amet, asdasdasdasdasdasd',
          category: 'Shirt',
          price: '55.99'
        },
        {
          id: 6,
          title: 'T-Shirt N3',
          img: 'maika6.jpg',
          desc: 'Lorem ipsum dolor sit amet, asdasdasdasdasdasd',
          category: 'Shirt',
          price: '70.99'
        },
        {
          id: 7,
          title: 'Hoodie N1',
          img: 'maika7.jpg',
          desc: 'Lorem ipsum dolor sit amet, asdasdasdasdasdasd',
          category: 'Hoodie',
          price: '40.99'
        },
        {
          id: 8,
          title: 'Hoodie N2',
          img: 'maika8.jpg',
          desc: 'Lorem ipsum dolor sit amet, asdasdasdasdasdasd',
          category: 'Hoodie',
          price: '80.23'
        },
        {
          id: 9,
          title: 'Hoodie N3',
          img: 'maika9.jpg',
          desc: 'Lorem ipsum dolor sit amet, asdasdasdasdasdasd',
          category: 'Hoodie',
          price: '20.99'
        },
      ],
      fullItem: false,
      fullItems: {}
    }
    this.state.currentItems = this.state.items;
    this.addToOrder = this.addToOrder.bind(this);
    this.deleteOrder = this.deleteOrder.bind(this);
    this.filterCategory = this.filterCategory.bind(this);
    this.onShowItem = this.onShowItem.bind(this);
  }
  render(){
    return (
      <div className="wrapper">
          <Header orders={this.state.orders} onDelete={this.deleteOrder}/>
          <Categories filterCategory={this.filterCategory}/>
          <Items onShowItem={this.onShowItem} items={this.state.currentItems} onAdd={this.addToOrder}/>

          {this.state.fullItem && <ShowFullItem onShowItem={this.onShowItem} item={this.state.fullItems} onAdd={this.addToOrder}/>}
          <Footer/>
      </div>
    );
    }

    onShowItem(item) {
      this.setState({fullItems: item})
      this.setState({fullItem: !this.state.fullItem})
    }

    filterCategory(category){
      if(category == 'All'){
        this.setState({currentItems: this.state.items})
        return
      }
      this.setState({
        currentItems: this.state.items.filter(el => el.category === category)
      })
    }


    deleteOrder(id) {
      this.setState({orders: this.state.orders.filter(el => el.id != id)})
    }

    addToOrder(item) {
      let isInArray = false;
      this.state.orders.forEach(el => {
        if(el.id === item.id){
          isInArray = true;
        }
      })
      if(!isInArray)
        this.setState({orders: [...this.state.orders, item]})
    }
}

export default App;
