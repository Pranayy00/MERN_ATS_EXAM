import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const AddCourse = () => {

    const [course, setCourse] = useState({
        courseName: '',
        instructor: '',
        category: '',
        duration: '',
        level: 'Beginner',
        thumbnail: ''
    })
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:4000/course/add', course)
            .then(() => navigate('/'))
            .catch((err) => console.log(err))
    }

    return (
        <>
            <div className="container">
                <div className="row justify-content-center g-2">
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-body">
                                <h4 className="card-title mb-3">Add Course</h4>
                                <form onSubmit={ handleSubmit }>
                                    <div className="form-floating mb-3">
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="courseName"
                                            placeholder=""
                                            value={ course.courseName }
                                            required
                                            onChange={ (e) => setCourse({ ...course, courseName: e.target.value }) }
                                        />
                                        <label htmlFor="courseName">Course Name</label>
                                    </div>

                                    <div className="form-floating mb-3">
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="instructor"
                                            placeholder=""
                                            value={ course.instructor }
                                            required
                                            onChange={ (e) => setCourse({ ...course, instructor: e.target.value }) }
                                        />
                                        <label htmlFor="instructor">Instructor Name</label>
                                    </div>

                                    <div className="form-floating mb-3">
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="category"
                                            placeholder=""
                                            value={ course.category }
                                            required
                                            onChange={ (e) => setCourse({ ...course, category: e.target.value }) }
                                        />
                                        <label htmlFor="category">Category</label>
                                    </div>

                                    <div className="form-floating mb-3">
                                        <input
                                            type="number"
                                            className="form-control"
                                            id="duration"
                                            placeholder=""
                                            min="0"
                                            value={ course.duration }
                                            required
                                            onChange={ (e) => setCourse({ ...course, duration: e.target.value }) }
                                        />
                                        <label htmlFor="duration">Duration (hours)</label>
                                    </div>

                                    <div className="form-floating mb-3">
                                        <select
                                            className="form-select"
                                            id="level"
                                            value={ course.level }
                                            onChange={ (e) => setCourse({ ...course, level: e.target.value }) }
                                        >
                                            <option value="Beginner">Beginner</option>
                                            <option value="Intermediate">Intermediate</option>
                                            <option value="Advanced">Advanced</option>
                                        </select>
                                        <label htmlFor="level">Level</label>
                                    </div>

                                    <div className="form-floating mb-3">
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="thumbnail"
                                            placeholder=""
                                            value={ course.thumbnail }
                                            onChange={ (e) => setCourse({ ...course, thumbnail: e.target.value }) }
                                        />
                                        <label htmlFor="thumbnail">Course Thumbnail (image URL)</label>
                                    </div>

                                    {
                                        course.thumbnail &&
                                        <div className="mb-3">
                                            <img
                                                src={ course.thumbnail }
                                                alt="preview"
                                                style={ { height: '120px', objectFit: 'cover' } }
                                            />
                                        </div>
                                    }

                                    <button
                                        type="submit"
                                        className="btn btn-primary"
                                    >
                                        Add
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AddCourse
