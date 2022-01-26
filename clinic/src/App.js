import React, {useState} from "react"
import {Radio, TextField, FormLabel, RadioGroup, FormControlLabel} from '@material-ui/core';
import './App.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'

const AddAppointment=()=>{

  const[cid,setCid]=useState("")
  const[title,setTitle]=useState("")
  const[adate,setAppdate]=useState("")
  const[time,setTime]=useState("")
  const[channel,setChannel]=useState("")
  const[doctors,setDoctors]=useState("")
  const[did,setDid]=useState("")
  const[uid,setUid]=useState("")
  const[fname,setFname]=useState("")
  const[lname,setLname]=useState("")
  const[bdate,setBookdate]=useState("")
  const[add,setAddress]=useState("")
  const[radio,setWalkin]=useState("")
  const[type,setType]=useState("")
  const[bp,setBp]=useState("")
  const[hgt,setHeight]=useState("")
  const[spo2,setSpo2]=useState("")
  const[temp,setTemp]=useState("")
  const[wgt,setWeight]=useState("")
  const[pr,setPulserate]=useState("")

    function addData(e) {
       e.preventDefault();
      console.log("Clinic ID"+cid);
      console.log("Appointment Title:"+title);
      console.log("Appointment Date:"+adate);
      console.log("Appointment Time:"+time);
      console.log("Appointment Channel:"+channel);
      console.log("Doctors:"+doctors);
      console.log("Doctor's ID:"+did);
      console.log("UserID:"+uid);
      console.log("First Name:"+fname);
      console.log("Last Name:"+lname);
      console.log("Booked Date:"+bdate);
      console.log("Address:"+add);
      console.log("Walk-In:"+radio);
      console.log("Appointment Type:"+type);
      console.log("Blood Pressure:"+bp);
      console.log("Height:"+hgt);
      console.log("SPO2:"+spo2);
      console.log("Temperature:"+temp);
      console.log("Weight:"+wgt);
      console.log("Pulse Rate:"+pr);
      
      
      fetch('http://13.233.217.107:8080/api/AddAppointment',{
        method: 'POST',
        body: JSON.stringify({
          cid: '122990548',
          title: 'title',
          adate: 'adate',
          time: 'time',
          channel: 'Walk In',
          doctors: 'doctors',
          did: '45346070',
          uid: '810459219',
          fname: 'fname',
          lname: 'lname',
          bdate: '13/01/2022',
          add: 'add',
          radio: 'radio',
          type: 'type',
          bp: 'bp',
          hgt: 'hgt',
          spo2: 'spo2',
          temp: 'temp',
          wgt: 'wgt',
          pr: 'pr'
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      }).then((result)=>{
        result.json().then((resp)=>{
          console.log(resp)
        })
      })
      alert('Appointment data is saved in API. Successfully!!!');
    }

    
    

    return(
      <div className="app">
        <h1>Book Appointment</h1>
       <form onSubmit={addData} className='frm'>
         <div className="row1">
         <div className="details">
            <h2>Details</h2>
            <FormLabel>Enter Clinic ID:</FormLabel>
            <TextField name='cid' label="Clinic Id" variant="outlined" className='txt' onChange={(e)=>setCid(e.target.value)}></TextField><br /><br />
            <FormLabel>Appointment Title:</FormLabel>
            <TextField name='title' label="Appointment Title" variant="outlined" className='txt' onChange={(e)=>setTitle(e.target.value)}></TextField><br /> <br />
            <FormLabel>Appointment Date:</FormLabel>
            <DatePicker  selected={adate} label="Appointment Date" className='txt' onChange={date=>setAppdate(date)} dateFormat='dd/MM/yyyy' isClearable></DatePicker><br /> <br />
            <FormLabel>Appointment Time:</FormLabel>
            <TextField name='time' label="Appointment Time" variant="outlined" className='txt' onChange={(e)=>setTime(e.target.value)}></TextField><br /> <br />
            <FormLabel>Appointment Channel:</FormLabel>
            <select name='channel' className='sel' onChange={(e)=>setChannel(e.target.checked)}>
              <option>Walk In</option>
              <option>Telephone</option>
              <option>Email</option>
            </select><br/><br/>
            <FormLabel>Doctors:</FormLabel>
            <select name='doctors' className='sel' onChange={(e)=>setDoctors(e.target.checked)}>
              <option value='Dr. Peter Parker'>Dr. Peter Parker</option>
              <option value='Dr. Ajit Pande'>Dr. Ajit Pande</option>
              <option value='Dr. Abhimanyu Birla'>Dr. Abhimanyu Birla</option>
              </select><br /><br />
            <FormLabel>Enter Doctor ID:</FormLabel>
            <TextField name='did' label="Doctor Id" variant="outlined" className='txt' onChange={(e)=>setDid(e.target.value)}></TextField>
            
         </div>

         <div className="appointment">
            <h2>Appointment Details</h2>
            <FormLabel>Enter UserId:</FormLabel>
            <TextField name='uid' label="UserId" variant="outlined" className='txt' onChange={(e)=>setUid(e.target.value)}></TextField><br /><br />
            <FormLabel>Enter the Name:</FormLabel>
            <TextField name='fname' label="First Name" variant="outlined" className='txt' onChange={(e)=>setFname(e.target.value)}></TextField>&nbsp;&nbsp;
            <TextField name='lname' label="Last Name" variant="outlined" className='txt' onChange={(e)=>setLname(e.target.value)}></TextField><br /> <br />
            <FormLabel>Booked Date:</FormLabel>
            <DatePicker  selected={bdate} label="Booked Date" className='txt' onChange={date=>setBookdate(date)} dateFormat='dd/MM/yyyy' isClearable></DatePicker><br /> <br />
            <FormLabel>Address:</FormLabel>
            <TextField name='add' label="Address" variant="outlined" className='txt' onChange={(e)=>setAddress(e.target.value)}></TextField><br /> <br />
            <FormLabel component="legend">Walk-In</FormLabel>
            <RadioGroup
                aria-label="walkin"
                defaultValue="Yes"
                onChange={(e)=>setWalkin(e.target.checked)}
                name="radio">
               <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
               <FormControlLabel value="No" control={<Radio />} label="No" />
            </RadioGroup><br/><br/>
            <FormLabel>Appointment Type:</FormLabel>
            <select name='type' className='sel' onChange={(e)=>setType(e.target.checked)}>
              <option value='Online'>Online</option>
              <option value='Offline'>Offline</option>
            </select><br /><br />

         </div>
         </div>

         <div className="vital">
            <h2>Vital Details</h2>
            <div className="vitalbox">
              <TextField name='bp' label="Blood Pressure" variant="outlined" className='txt' onChange={(e)=>setBp(e.target.value)} /> &nbsp;&nbsp;
              <TextField name='hgt' label="Height" variant="outlined" className='txt' onChange={(e)=>setHeight(e.target.value)} /> &nbsp;&nbsp;
              <TextField name='spo2' label="SPO2" variant="outlined" className='txt' onChange={(e)=>setSpo2(e.target.value)} /> &nbsp;&nbsp;
              <TextField name='temp' label="Temperature" variant="outlined" className='txt' onChange={(e)=>setTemp(e.target.value)} /> &nbsp;&nbsp;
              <TextField name='wgt' label="Weight" variant="outlined" className='txt' onChange={(e)=>setWeight(e.target.value)} /> &nbsp;&nbsp;
              <TextField name='pr' label="Pulse Rate" variant="outlined" className='txt' onChange={(e)=>setPulserate(e.target.value)} /> &nbsp;&nbsp;
              </div>
         </div>
          <div className="textarea">
            <textarea defaultValue='Reason'className="txtarea"></textarea>{" "}
            <textarea defaultValue='Note For Doctor' className="txtarea"></textarea>
          </div>
          <div className="button">
        <button className='btn' >Submit</button>
        <button className='btn'>Cancel</button>
        </div>
       </form> 
    </div>
    )

}

export default AddAppointment;