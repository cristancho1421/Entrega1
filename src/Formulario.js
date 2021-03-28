import React, {Fragment, useState}from 'react';

const Formulario =() =>{

    const[data, setDato] = useState({
        time1: '',
        time2: ''

    })
    const handleInputChange = (event) =>{
        setDato({
            ...data,
            [event.target.name]: event.target.value
        })
    }
    const tiempo =(time) =>{
        let t = time.split(':');
        let tc = [t[0],t[1]]
    }

    const enviarDatos = (event) =>{
        
        let tc = this.tiempo.tc;
        let timeA = new Date(0,0,0,0,tc(this.tiempo)[0],tc(this.time1)[1],0);

        let timeB = new Date(0,0,0,0,tc(this.tiempo)[0],tc(this.time2)[1],0);
        let totalTime = parseInt((timeB - timeA )/1000);
        var sec = totalTime;

        if (sec >=6){
                text.html(sec);
                sec-=1;
            }
            else if (sec > 0 && sec<=5){
                text.html(sec+' alert, prepare your army').css('color','red');
                sec-=1;
            }
            else if (sec==0){
                text.html('attack').css('font-size','21');
            }
        event.preventDefault();
    }
        

    return(
        <div>
            <form id="init" onSubmit={enviarDatos}>
                <h2>Conteo de Tiempo</h2>
                <input type="text" 
                name="time1" id="time1" size="50"
                onChange={handleInputChange}
                placeholder="Digita tu tiempo en el siguiente formato MM:SS"></input><br />
                <input type="text" 
                name="time2" id="time2" size="50"
                onChange={handleInputChange}
                placeholder="Digita el tiempo total en este formato MM:SS"></input><br />
                <button type="submit">Iniciar</button>
            </form>
            <section value={datos.text}>
                <p>your time is : <strong id="count"></strong></p>
            </section>
        </div>
    );

}

export default Formulario;