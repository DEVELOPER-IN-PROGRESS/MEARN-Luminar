import React  from 'react';

class Prestige extends React.Component {

 render(){
    console.log(this.props)
    return(
        <>
        <p style={{textAlign:'center',marginTop:'20px',}}> Are you watching closely...... ? </p>
        <p>{this.props.part}</p>
        </>
    );
 }
}

export default Prestige;