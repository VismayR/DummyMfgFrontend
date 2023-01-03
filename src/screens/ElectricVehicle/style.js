import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    marginHorizontal: 30,
    marginVertical: 10,
    borderWidth: 2,
    borderColor:'gray'
  },
  innerContainer: {
    padding: 10,
    flexDirection: 'row',
  },
  horizontalLine:{
    height:2,
    backgroundColor:'gray',
    marginHorizontal:10
  },
  insideCardBtn:{
    marginHorizontal:10,
    flexDirection:'row',
    justifyContent:'space-between'
  },
  insideCardBtnTxt:{
    marginVertical:5,
    fontWeight:'bold'
  },
  DefBtnTxt:{
    color:'black',
  },
  DelBtnTxt:{
    color:'red',
  },
  carImage: {
    height: 70,
    width: 100,
    marginRight: 10,
  },
  carName: {
    fontWeight: 'bold',
    color:'black'
  },
  item: {
    flexDirection: 'row',
  },
  image: {
    width: 100,
    height: 50,
  },
  vehicleAvailability: {
    fontWeight: '700',
    textAlign: 'center',
    flex: 1,
  },
  addButton: {
    backgroundColor: 'red',
    padding: 10,
    margin: 10,
  },
  btnText: {
    color: 'white',
    textAlign: 'center',
  },
  mainContainer: {
    margin: 10,
  },
  topContainer: {
    margin: 10,
    flexDirection: 'row',
    paddingBottom: 10,
    borderBottomWidth: 3,
    borderBottomColor: 'gray',
  },
  inputContainer: {
    borderWidth: 2,
    borderColor: 'lightgray',
    flexDirection: 'row',
    flex: 1,
    paddingHorizontal: 5,
  },
  searchLogo: {
    width: 25,
    height: 25,
    marginTop: 10,
    marginRight: 10,
  },
  filterContainer: {
    padding: 10,
    marginLeft: 10,
    elevation: 5,
    shadowOffset: {width: -2, height: 10},
    shadowOpacity: 0.5,
    shadowRadius: 5,
    shadowColor: 'gray',
  },
  filterLogo: {
    width: 25,
    height: 25,
    marginTop: 10,
  },
});
