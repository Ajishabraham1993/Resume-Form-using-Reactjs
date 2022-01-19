import React,{ useCallback, useRef,useState } from 'react'
import ReactTags from 'react-tag-autocomplete'

const Resumeform = () => {
    const [inputs, setInputs] = useState({})

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
        
      }
      const skills = useState({})
      const handleSubmit = (event) => {
        event.preventDefault();
        console.log(inputs);
        console.log(Education);
        console.log(formValuesexp);
        console.log(tags)
      }

      const [formValues, setFormValues] = useState([{Education: [{ institute: "", year : "", degree : ""}]}])
      const Education = formValues;

      const handleChangeedu = (i, e) => {
        const newFormValues = [...formValues];
        newFormValues[i][e.target.name] = e.target.value;
        setFormValues(newFormValues);
      }
    
      const addFormFields = () => {
        setFormValues([...formValues, [{Education: [{ institute: "", year: "", degree : "" }]}]])
      }
    
      const removeFormFields = (i) => {
        const newFormValues = [...formValues];
        newFormValues.splice(i, 1);
        setFormValues(newFormValues)
    }

    const [formValuesexp, setFormValuesexp] = useState([{Experience:[{ company: "", year : "", designation : ""}]}])

    let handleChangeexp = (i, e) => {
        let newFormValues = [...formValuesexp];
        newFormValues[i][e.target.name] = e.target.value;
        setFormValuesexp(newFormValues);
        
      }
    
    let addFormFieldsexp = () => {
        setFormValuesexp([...formValuesexp, [{Experience: [{ company: "", year: "", designation : "" }]}]])
      }
    
    let removeFormFieldsexp = (i) => {
        let newFormValues = [...formValuesexp];
        newFormValues.splice(i, 1);
        setFormValuesexp(newFormValues)
    }
    
    const [tags, setTags] = useState([])
    
    function Addautocompleteskill () {
        
    
        const [suggestions, setSuggestions] = useState([
        { id: 1, name: "PHP" },
        { id: 2, name: "Javascript" },
        { id: 3, name: "Java" },
        { id: 4, name: "HTML5" },
        { id: 5, name: "MySQL" },
        { id: 6, name: "CSS" },
        { id: 7, name: "Phython" }
        ])
    
        const reactTags = useRef()
    
        const onDelete = useCallback((tagIndex) => {
        setTags(tags.filter((_, i) => i !== tagIndex))
        }, [tags])
    
        const onAddition = useCallback((newTag) => {
        setTags([...tags, newTag])
        }, [tags])
        
        return (
        
        <div className="wrap-input100 validate-input m-b-26">
            <span className="label-input100">Skills</span>
        <ReactTags  className="input100"
            ref={reactTags}
            tags={tags}
            suggestions={suggestions}
            onDelete={onDelete}
            onAddition={onAddition}
            placeholderText = {'Skills'}
        />
        <span className="focus-input100"></span>
        </div>
        )
    }


    return (
        <>
        <div className="limiter">
		<div className="container-login100">
			<div className="wrap-login100">
				<div className="login100-form-title head-img">
					<span className="login100-form-title-1">
						Resume Form
					</span>
				</div>
                    <form className='login100-form validate-form' onSubmit={handleSubmit}>
                            <div className="wrap-input100 validate-input m-b-26" data-validate="Username is required">
                                <span className="label-input100">Name</span>
                                <input className="input100" type="text" name="name" value={inputs.name || ""} onChange={handleChange} placeholder="Enter name"/>
                                <span className="focus-input100"></span>
                            </div>

                            <div className="wrap-input100 validate-input m-b-18" data-validate = "Email is required">
                                <span className="label-input100">Email</span>
                                <input className="input100" type="text" name="email" value={inputs.email || ""} onChange={handleChange} placeholder="Enter email"/>
                                <span className="focus-input100"></span>
                            </div>
                            
                            <div className="wrap-input100 m-b-18">
                                <span className="label-input100">Address</span>
                                <textarea  className="input100"  name="address" value={inputs.address || ""} onChange={handleChange}>

                                </textarea>
                                <span className="focus-input100"></span>
                            </div>

                            <div className="wrap-input100 validate-input m-b-18" data-validate = "phone is required">
                                <span className="label-input100">Phone</span>
                                <input className="input100" type="text" name="phone" value={inputs.phone || ""} onChange={handleChange} placeholder="Enter phone"/>
                                <span className="focus-input100"></span>
                            </div>
                            
                            {formValues.map((element, index) => (
                                <span className='inputwrap' key={index}>
                                    <div className="wrap-input100 validate-input m-b-26 inputaddinstitute">
                                    {
                                    index ?
                                        null
                                        : <span className="label-input100">Education</span>
                                    }
                                        <input className="input100" required type="text" name="institute" value={element.institute || ""} onChange={e => handleChangeedu(index, e)} placeholder="Enter institute"/>
                                        <span className="focus-input100"></span>
                                    </div>
                                    <div className="wrap-input100 validate-input m-b-26 inputaddyear">
                                        
                                        <input className="input100" required type="text" name="year" value={element.year || ""} onChange={e => handleChangeedu(index, e)} placeholder="Enter year"/>
                                        <span className="focus-input100"></span>
                                    </div>
                                    <div className="wrap-input100 validate-input m-b-26 inputadddegree">
                                    
                                    <input className="input100" required type="text" name="degree" value={element.degree || ""} onChange={e => handleChangeedu(index, e)} placeholder="Enter degree"/>
                                    <span className="focus-input100"></span>
                                    
                                    </div>
                                    {
                                    index ?
                                    <span className='remove-form-btn'><i  className="fa fa-times" aria-hidden="true" onClick={() => removeFormFields(index)}></i></span>
                                        : null
                                    }
                                </span>
                            ))}
                            <div className="button-section">
                                <button className="login100-form-btn add-form-btn" type="button" onClick={() => addFormFields()}>Add</button>
                            </div>
                            
                            {formValuesexp.map((element, index) => (
                                <span className='inputwrap' key={index}>
                                    <div className="wrap-input100 validate-input m-b-26 inputaddinstitute">
                                    {
                                    index ?
                                        null
                                        : <span className="label-input100">Experience</span>
                                    }
                                    
                                        <input className="input100" required type="text" name="company" value={element.company || ""} onChange={e => handleChangeexp(index, e)} placeholder="Enter company"/>
                                        <span className="focus-input100"></span>
                                    </div>
                                    <div className="wrap-input100 validate-input m-b-26 inputaddyear">
                                        
                                        <input className="input100" required type="text" name="year" value={element.year || ""} onChange={e => handleChangeexp(index, e)} placeholder="Enter year"/>
                                        <span className="focus-input100"></span>
                                    </div>
                                    <div className="wrap-input100 validate-input m-b-26 inputadddegree">
                                    
                                    <input className="input100" required type="text" name="designation" value={element.designation || ""} onChange={e => handleChangeexp(index, e)} placeholder="Enter designation"/>
                                    <span className="focus-input100"></span>
                                    </div>
                                    {
                                    index ?
                                    <span className='remove-form-btn'><i  className="fa fa-times" aria-hidden="true" onClick={() => removeFormFieldsexp(index)}></i></span>
                                        : null
                                    }
                                </span>
                            ))}
                            <div className="button-section">
                                <button className="login100-form-btn add-form-btn" type="button" onClick={() => addFormFieldsexp()}>Add</button>
                            </div>

                            <Addautocompleteskill />
                            <div className="container-login100-form-btn">
                                <button className="login100-form-btn submit-form-btn">
                                    Save
                                </button>
                            </div>
                    </form>
                </div>
            </div>
        </div>
	
        </>
        
    )
}

export default Resumeform
