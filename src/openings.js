import { Form, Input, Button, Modal, Select } from "antd";

import React, { useState } from 'react';

const Openings = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [selectedJob, setSelectedJob] = useState(null);
    const [experience, setExperience] = useState('');
    const [role, setRole] = useState('');
    const [seniorSupport, setSeniorSupport] = useState('');

    const onFinish = (values) => {
        console.log('Form values:', values);
        // You can perform actions with the form values here
    };

    const onChangeExperience = (value) => {
        setExperience(value);
    };

    const onChangeRole = (value) => {
        setRole(value);
    };

    const onChangeSeniorSupport = (e) => {
        setSeniorSupport(e.target.value);
    };

    const jobOpenings = [
        {
            title: 'NODE JS (Exp: 1-3yrs)',
            description: 'Description: Amazon Web Services (AWS), MERN Stack, Node.js, React.js, TypeScript, and Vue.js',
        },
        // Add more job openings here
    ];

    const showModal = (index) => {
        setSelectedJob(jobOpenings[index]);
        setIsModalVisible(true);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    return (
        <>
            {jobOpenings.map((opening, index) => (
                <div
                    key={index}
                    style={{
                        width: '100vw',
                        height: '120px',
                        backgroundColor: 'rgba(255, 255, 255, 0.2)',
                        marginTop: '1.5rem',
                        backdropFilter: 'blur(-5px)',
                        WebkitBackdropFilter: 'blur(5px)',
                    }}
                >
                    <h3>{opening.title}</h3>
                    <p style={{ color: 'white' }}>{opening.description}</p>
                    <Button type='primary' onClick={() => showModal(index)}>
                        APPLY NOW!
                    </Button>
                </div>
            ))}
            <Modal
                title={selectedJob ? selectedJob.title : ''}
                visible={isModalVisible}
                onCancel={handleCancel}
                footer={''}
            >
                {selectedJob ? (
                    <p>{selectedJob.description}</p>
                ) : (
                    <p>No job selected</p>
                )}
                <h3 style={{ color: 'red' }}>To know you better,please fill the form below.</h3>
                <Form
                    name="application-form"
                    onFinish={onFinish}
                    initialValues={{
                        experience,
                        role,
                        seniorSupport,
                    }}
                >
                    <h4>Personal details</h4>
                    <Form.Item
                        label="Full Name"
                        name="fullname"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your full name!',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="Father's Name"
                        name="fathername"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your father\'s name!',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="DOB"
                        name="dob"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your date of birth!',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="Current Location"
                        name="currentlocation"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your current location!',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <h4>Experience</h4>
                    <Form.Item
                        label="Experience"
                        name="experience"
                        rules={[
                            {
                                required: true,
                                message: 'Please select your experience!',
                            },
                        ]}
                    >
                        <Select onChange={onChangeExperience} options={[ /* options */]}></Select>
                    </Form.Item>
                    <Form.Item
                        label="Specialized Roles"
                        name="role"
                        rules={[
                            {
                                required: true,
                                message: 'Please select your specialized role!',
                            },
                        ]}
                    >
                        <Select onChange={onChangeRole} options={[ /* options */]}></Select>
                    </Form.Item>
                    <Form.Item
                        label="Tools Used"
                        name="tools"
                        rules={[
                            {
                                required: true,
                                message: 'Please input the tools you have used!',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="Why should we hire you?"
                        name="answer"
                        rules={[
                            {
                                required: true,
                                message: 'Please provide why you should be hired!',
                            },
                        ]}
                    >
                        <Input.TextArea
                            onChange={onChangeSeniorSupport}

                            autoSize={{ minRows: 5 }}
                        />
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                    </Form.Item>
                </Form>

            </Modal>
        </>
    );
};

export default Openings;
