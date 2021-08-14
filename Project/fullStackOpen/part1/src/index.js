import React from 'react';
import ReactDOM from 'react-dom';
import PrintName from './App';
import PrintNickName from './NickName';
import PrintDate from './PrintDate';

const element = (
                <div> 
                    <PrintName/> 
                    <PrintNickName/>
                    <PrintDate/>
                </div>);

ReactDOM.render( element, document.getElementById('root'));


