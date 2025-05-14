import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Row, Col, Card, Form, Button, Alert, Table, Image } from 'react-bootstrap';

const Viewpage = () => {
    const [products, setProducts] = useState([]);
    const [message, setMessage] = useState('');
    const [formData, setFormData] = useState({
        name: '',
        qty: '',
        rate: '',
        price: '',
        detail: '',
        image: null
    });
    const [editMode, setEditMode] = useState(false);
    const [editProductId, setEditProductId] = useState(null);

    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = async () => {
        try {
            const res = await axios.get('http://localhost:5000/products');
            setProducts(res.data);
        } catch (error) {
            console.error(error);
        }
    };

    const handleInputChange = (e) => {
        const { name, value, files } = e.target;
        if (name === 'image') {
            setFormData(prev => ({ ...prev, image: files[0] }));
        } else {
            const updatedForm = { ...formData, [name]: value };

            if (name === 'qty' || name === 'rate') {
                const qty = parseFloat(name === 'qty' ? value : updatedForm.qty) || 0;
                const rate = parseFloat(name === 'rate' ? value : updatedForm.rate) || 0;
                updatedForm.price = (qty * rate).toFixed(2);
            }

            setFormData(updatedForm);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = new FormData();
        data.append('name', formData.name);
        data.append('qty', formData.qty);
        data.append('rate', formData.rate);
        data.append('price', formData.price);
        data.append('detail', formData.detail);
        data.append('image', formData.image);

        try {
            if (editMode) {
                await axios.put(`http://localhost:5000/products/${editProductId}`, data);
                setMessage('Product updated successfully!');
            } else {
                await axios.post('http://localhost:5000/products', data);
                setMessage('Product added successfully!');
            }
            setFormData({ name: '', qty: '', rate: '', price: '', detail: '', image: null });
            setEditMode(false);
            setEditProductId(null);
            fetchProducts();
        } catch (error) {
            console.error(error);
            setMessage('Something went wrong.');
        }
    };

    const handleEdit = (product) => {
        setFormData({
            name: product.name,
            qty: product.qty || '',
            rate: product.rate || '',
            price: product.price,
            detail: product.product_detail,
            image: null
        });
        setEditMode(true);
        setEditProductId(product.id);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleDelete = async (id) => {
        if (window.confirm('Are you sure you want to delete this product?')) {
            try {
                await axios.delete(`http://localhost:5000/products/${id}`);
                setMessage('Product deleted successfully!');
                fetchProducts();
            } catch (error) {
                console.error(error);
                setMessage('Something went wrong.');
            }
        }
    };

    return (
        <Container className="py-5">
            <h2 className="text-center mb-4 fw-bold text-success"  style={{marginTop:"30px "}}>Farmer Management</h2>

            {message && <Alert variant="info" onClose={() => setMessage('')} dismissible>{message}</Alert>}

            <Row>
                <Col md={4}>
                    <Card className="shadow-sm p-4 mb-4">
                        <h4 className="text-center mb-4">{editMode ? 'Edit Product' : 'Add New Product'}</h4>

                        <Form onSubmit={handleSubmit}>
                            <Form.Group className="mb-3">
                                <Form.Label>Product Name</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    placeholder="Enter product name"
                                    required
                                />
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Label>Quantity</Form.Label>
                                <Form.Control
                                    type="number"
                                    name="qty"
                                    value={formData.qty}
                                    onChange={handleInputChange}
                                    placeholder="Enter quantity"
                                    required
                                />
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Label>Rate (Rs.)</Form.Label>
                                <Form.Control
                                    type="number"
                                    name="rate"
                                    value={formData.rate}
                                    onChange={handleInputChange}
                                    placeholder="Enter rate"
                                    required
                                />
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Label>Total Price (Rs.)</Form.Label>
                                <Form.Control
                                    type="number"
                                    name="price"
                                    value={formData.price}
                                    placeholder="price"
                                    readOnly
                                />
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Label>Product Detail</Form.Label>
                                <Form.Control
                                    as="textarea"
                                    rows={3}
                                    name="detail"
                                    value={formData.detail}
                                    onChange={handleInputChange}
                                    placeholder="Enter product details"
                                    required
                                />
                            </Form.Group>

                            <Form.Group className="mb-4">
                                <Form.Label>Product Image</Form.Label>
                                <Form.Control
                                    type="file"
                                    name="image"
                                    accept="image/*"
                                    onChange={handleInputChange}
                                    required={!editMode}
                                />
                            </Form.Group>

                            <Button type="submit" variant="success" className="w-100">
                                {editMode ? 'Update Product' : 'Add Product'}
                            </Button>
                        </Form>
                    </Card>
                </Col>

                <Col md={8}>
                    <Card className="shadow-sm p-3">
                        <h4 className="text-center mb-3">Product List</h4>

                        <Table striped bordered hover responsive className="text-center align-middle">
                            <thead className="table-success">
                                <tr>
                                    <th>Image</th>
                                    <th>Name</th>
                                    <th>Qty</th>
                                    <th>Rate (Rs.)</th>
                                    <th>Total (Rs.)</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {products.length > 0 ? (
                                    products.map(product => (
                                        <tr key={product.id}>
                                            <td>
                                                <Image
                                                    src={`http://localhost:5000/image/${product.image}`}
                                                    alt={product.name}
                                                    thumbnail
                                                    style={{ width: '80px', height: '80px', objectFit: 'cover' }}
                                                />
                                            </td>
                                            <td>{product.name}</td>
                                            <td>{product.qty}</td>
                                            <td>{product.rate}</td>
                                            <td>{Number(product.price).toFixed(2)}</td>
                                            <td>
                                                <Button variant="outline-primary" size="sm" className="me-2" onClick={() => handleEdit(product)}>
                                                    Edit
                                                </Button>
                                                <Button variant="outline-danger" size="sm" onClick={() => handleDelete(product.id)}>
                                                    Delete
                                                </Button>
                                            </td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan="6" className="text-center">No products found.</td>
                                    </tr>
                                )}
                            </tbody>
                        </Table>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default Viewpage;
