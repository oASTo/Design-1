import React, { Component } from 'react';
import { Ionicons } from '@expo/vector-icons';
import {
  View,
  Text,
  StyleSheet,
  Platform,
  ScrollView,
  Button,
  TouchableOpacity,
} from 'react-native';
import Item from './Item';
import Clinics from './Clinics';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import PlusMinus from './plusminus';

export default class BuyTreatmentScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      doctor: [
        { id: 1, name: 'Dinda Radina Skin Specialist' },
        { id: 2, name: 'Leny Eye Specialist' },
        { id: 3, name: 'Jessica Nail Specialist' },
        { id: 4, name: 'Yenny Facial Specialist' },
        { id: 5, name: 'Herryanto Nose Specialist' },
        { id: 6, name: 'Jennifer Cheecks Specialist' },
      ],
      qtycount: 0,
      price:3200000,
      totalprice:0,
      totalpriceprint:"0",
    };
    this.clickhandle = this.clickhandle.bind(this);
  }

  clickhandle = Button => {
    if (Button.title === '+') {
      this.qtyinc();
    } else {
      this.qtydec();
    }
  };

  qtyinc = () => {
    this.setState({
      qtycount: this.state.qtycount + 1,
      totalprice:this.state.totalprice + 3200000,
    })
  };


  qtydec = () => {
    if (this.state.qtycount > 0) {
      this.setState({
        qtycount: this.state.qtycount - 1,
        totalprice:this.state.totalprice - 3200000,
      });
    } else {
      return alert('qty must > 0 ');
    }
  };
  static navigationOptions = {
    headerTitle: 'Buy Treatment',
    headerLeft: (
      <Ionicons
        style={{ marginLeft: 15 }}
        name="ios-arrow-back"
        size={32}
        color="#999999"
      />
    ),
    headerRight: (
      <Ionicons
        style={{ marginRight: 15 }}
        name="md-menu"
        size={32}
        color="#999999"
      />
    ),

    headerStyle: {
      backgroundColor: '#E7E7E7'
    },
    //headerTintColor: '#0ff',
    headerTitleStyle: {
      fontWeight: 'bold',
      color: '#999999'
    }
  };

  render() {
    return (
      <>
        <View style={styles.container}>
          <View style={{marginVertical:5, backgroundColor:'white', flexWrap:'wrap', padding:5}}>
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 16,
              marginVertical: 5
            }}
          >
            Treatment Detail
          </Text>
          

          <View style={{ flexDirection: 'row', justifyContent:"space-around",}}>
            <Item title="Treatment" />
            <View style={{flexDirection:'column'}}>
            <Text>Dinda Radina Skin Specialist</Text>
            <View style={{flexDirection:'row'}}>
            <View style={{  backgroundColor:'#E36E65',width:70,height:30, alignItems:'center', marginRight:10 }}>
              <Ionicons name="md-heart" size={30}  />
              </View>
              <View style={{ backgroundColor:'#E36E65',width:70,height:30, alignItems:'center'}}>
              <Ionicons name="ios-list-box" size={30}  />
              </View>
              </View>

            </View>
            
          </View>
          </View>

            <Description />


          <View style={{ flexDirection: 'column', marginBottom:5,backgroundColor:'white', padding:5 }}>
            <View
              style={{
                flexDirection: 'row',
                flexWrap: 'wrap',
                justifyContent: 'space-around'
              }}
            >
              <Text>Price </Text>
              <Text color="#FD7F06" fontWeight='bold'>Rp.3.200.000,-</Text>
            </View>

            <View
              style={{
                flexDirection: 'row',
                flexWrap: 'wrap',
                justifyContent: 'space-around'
              }}
            >
              <Text>Qty</Text>
              <View style={{ flexDirection: 'row' }}>
                <PlusMinus title="-" onPress={this.qtydec}/>
                
                <View style={{borderWidth:1, margin:5, borderColor:'#F5F5F5'}}>
                <Text style={{ margin: 10 }} >{this.state.qtycount}</Text>
                </View> 
                <PlusMinus title="+" onPress={this.qtyinc}/>
              </View>
            </View>
          </View>

          <View style={{ flex: 1, flexWrap: 'wrap',backgroundColor:'white', marginVertical:5, padding:5}}>
            <Text>Available Clinic</Text>
            <View style={{marginVertical:5,}} />

            <ScrollView>
            {this.state.doctor.map(item => (
                  <Clinics key={item.id} title={item.name}/>
              ))}

            {/* tes liat leny eyes specialist dah jalan lom kalo lom */}
            </ScrollView>

            </View>
          
          <View style={styles.exeButton}>
            <Text style={{fontWeight:'bold',color:'white'}}>Rp.{this.state.totalprice.toString()},-</Text>
            <Text style={{fontWeight:'bold',color:'white'}}>Buy</Text>
          </View>

        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    flex: 1,
    flexDirection: 'column',
    backgroundColor:'#E7E7E7'
  },
  itemspacing: {
    borderWidth: 2,
    marginVertical: 5,
    borderColor:'#F5F5F5'
  },
  qty: {
    borderWidth: 1
  },

  exeButton:{
    paddingVertical:10,
    flexDirection:'row',
    backgroundColor:"#FD7F06",
    borderRadius:5,
    justifyContent:'space-around',
  }
});

function Description(){
  return(
  <View style={{marginTop:5, backgroundColor:'white', padding:5}}>
  <Text
    style={{
      fontWeight: 'bold',
      flexWrap: 'wrap',
    }}
  >
    Description
  </Text>
  <View style={{marginTop:5,}} />
  <Text>1 Unit Service diantara lain</Text>
  <Text>2 x Service A</Text>
  <Text>3 x Service B</Text>
  <Text>4 x Service C</Text>
  <Text>Menggunakan obat herbal, blablabla blablablab blablabla</Text>
  
</View>

  )
}
