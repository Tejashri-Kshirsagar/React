import React,{useState} from "react";

function Home() {
    const getInitState = () => {
        const option = "Dropdown";
        return option;
      };
    const [option, setoption] = useState(getInitState);
    function changeOption(e) {
      console.log(setoption(e.target.value))
    }
    return (
        <div className="main">
            <select className="selopt" value={option} onChange={changeOption}>
                <option value="Dropdown">DropDown</option>
                <option value="Information">Information</option>
            </select>
            {
                option==='Dropdown'?<div><br /><br /><h1>{`This is ${option}`}</h1><br /><br /><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p></div>:<div><p id ="text-data" style={{float: 'left'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum tempus egestas sed sed risus pretium quam vulputate dignissim. Et ultrices neque ornare aenean euismod elementum nisi. Lorem ipsum dolor sit amet. Pellentesque eu tincidunt tortor aliquam nulla facilisi cras. Bibendum neque egestas congue quisque egestas diam in arcu. Turpis nunc eget lorem dolor sed viverra ipsum nunc. Sit amet risus nullam eget. Integer quis auctor elit sed vulputate mi sit. Quis enim lobortis scelerisque fermentum dui faucibus in ornare quam. Sit amet facilisis magna etiam tempor orci. Vitae congue mauris rhoncus aenean vel elit scelerisque mauris pellentesque. Et malesuada fames ac turpis egestas.<br />
                <span><b>Note:Lorem ipsum dolor sit amet, consectetur adipiscing elit.</b></span></p></div>
            }
        </div>
    )
}
export default Home;