import React from 'react'
import ReactDOM from 'react-dom'
import PageManager from '../page-manager'

const StoreHours = () => (
    <div style={{textAlign: 'center',
                fontSize: 'calc(0.7vmin + 16px)',
                fontWeight: '800',
                marginBottom: '20px'}}>
                    {/* BB4430 */}
        <div style={{backgroundColor: '#FFBA00', 
                    padding: '0.1vmin'}}>
            <h1 style={{fontSize: 'calc(1.7vmin + 20px)', 
                        color: '#2C5063',
                        width: '80%',
                        margin: '.1vmin', 
                        marginLeft: '10%',
                        fontWeight: '800'}}>
                Store Hours
            </h1>
        </div>
        <div style={{backgroundColor: '#8EB6CC'}}>
            <div style={{backgroundColor: '#2C5063'}}>
                <p style={{fontSize: '3.5', 
                            width: '80%', 
                            margin: '.1vmin',
                            marginLeft: '10%',
                            marginTop: '.10vmin',
                            backgroundColor: '#8EB6CC',
                            color: '#2C5063',
                            fontWeight: '600',
                            padding: '0.1vmin'}}>
                    Monday - Friday: 9-7<br/>
                    Saturday: 8-6:30<br/>
                    Sunday: 8-5:30<br/>
                </p>
            </div>
        </div>
    </div>
)

export default class Homepage extends PageManager { 
    onReady() { 
            let container = $('#root')[0]
            ReactDOM.render(<StoreHours context={this.context}/>, container)
    }

}
