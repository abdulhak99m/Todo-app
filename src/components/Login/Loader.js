import React, { Component } from 'react'
import Loader from "react-loader-spinner";

export class Loader1 extends Component {
    render() {
        return (
            <div>
                    <div style={{height:'100vh',textAlign:'center',position:'relative'}}>
                        <div style={{position:'absolute',top:'40%',left:'40%'}}>
                            <Loader
                            type="Bars"
                            color="white"
                            height={60}
                            width={60}
                            // timeout={3000} //3 secs
                        />
                    </div>
                  </div>
            </div>
        )
    }
}

export default Loader1