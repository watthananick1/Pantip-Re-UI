import React, { Component } from 'react';
import Grid from '@mui/material/Grid';
import { Panel } from 'primereact/panel';
import Content from './content/Content';
import Footer from '../footer/Footer';
import { Tag } from 'primereact/tag';
import { Divider } from 'primereact/divider';
import { Carousel, CarouselResponsiveOption } from 'primereact/carousel';
import { Button } from 'primereact/button';

interface Product {
    id: string;
    code: string;
    name: string;
    description: string;
    image: string;
    price: number;
    category: string;
    quantity: number;
    inventoryStatus: string;
    rating: number;
}

export default class Body extends Component {
    state = {
        products: [
            {
                id: '1000',
                code: 'f230fh0g3',
                name: 'Bamboo Watch',
                description: 'Product Description',
                image: 'bamboo-watch.jpg',
                price: 65,
                category: 'Accessories',
                quantity: 24,
                inventoryStatus: 'INSTOCK',
                rating: 5
            },
            {
                id: '1000',
                code: 'f230fh0g3',
                name: 'Bamboo Watch',
                description: 'Product Description',
                image: 'bamboo-watch.jpg',
                price: 65,
                category: 'Accessories',
                quantity: 24,
                inventoryStatus: 'INSTOCK',
                rating: 5
            },
            {
                id: '1000',
                code: 'f230fh0g3',
                name: 'Bamboo Watch',
                description: 'Product Description',
                image: 'bamboo-watch.jpg',
                price: 65,
                category: 'Accessories',
                quantity: 24,
                inventoryStatus: 'INSTOCK',
                rating: 5
            },
            {
                id: '1000',
                code: 'f230fh0g3',
                name: 'Bamboo Watch',
                description: 'Product Description',
                image: 'bamboo-watch.jpg',
                price: 65,
                category: 'Accessories',
                quantity: 24,
                inventoryStatus: 'INSTOCK',
                rating: 5
            },
            {
                id: '1000',
                code: 'f230fh0g3',
                name: 'Bamboo Watch',
                description: 'Product Description',
                image: 'bamboo-watch.jpg',
                price: 65,
                category: 'Accessories',
                quantity: 24,
                inventoryStatus: 'INSTOCK',
                rating: 5
            },
            {
                id: '1000',
                code: 'f230fh0g3',
                name: 'Bamboo Watch',
                description: 'Product Description',
                image: 'bamboo-watch.jpg',
                price: 65,
                category: 'Accessories',
                quantity: 24,
                inventoryStatus: 'INSTOCK',
                rating: 5
            },
            {
                id: '1000',
                code: 'f230fh0g3',
                name: 'Bamboo Watch',
                description: 'Product Description',
                image: 'bamboo-watch.jpg',
                price: 65,
                category: 'Accessories',
                quantity: 24,
                inventoryStatus: 'INSTOCK',
                rating: 5
            },
        ]
    };

    responsiveOptions: CarouselResponsiveOption[] = [
        {
            breakpoint: '1400px',
            numVisible: 2,
            numScroll: 1
        },
        {
            breakpoint: '1199px',
            numVisible: 3,
            numScroll: 1
        },
        {
            breakpoint: '767px',
            numVisible: 2,
            numScroll: 1
        },
        {
            breakpoint: '575px',
            numVisible: 1,
            numScroll: 1
        }
    ];
    productTemplate = (product: Product) => {
        return (
            <div className="border-1 surface-border border-round m-2 text-center py-5 px-3">
                <div className="mb-2">
                    <img src={`https://primefaces.org/cdn/primereact/images/product/${product.image}`} alt={product.name} className="w-5 shadow-2" />
                </div>
                <div>
                    <h4 className="mb-1">{product.name}</h4>
                    <h6 className="mt-0 mb-2">${product.price}</h6>
                </div>
            </div>
        );
    };
    render() {
        return (
            <div>
                <Grid container>
                    <Grid item xs={12} sx={{ margin: '10px', justifyContent: 'center' }} rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} justifyContent="center">
                            <Grid spacing={2} xs={10} item>
                                <Panel header="Announce" style={{ color: '#662C91', marginBottom: 15 }}>
                                    <div className="border-1 surface-border border-round m-2 text-center py-5 px-3">
                                        <span>
                                            <Tag value='Highlight' style={{ backgroundColor: '#FF9800' }} rounded></Tag>
                                        </span>
                                        <span>
                                            <p style={{ fontSize: '0.8rem' }} className="m-0">
                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae
                                                numquam deserunt quisquam repellat
                                            </p>
                                        </span>
                                    </div>
                                    <Divider />
                                    <div className="border-1 surface-border border-round m-2 text-center py-5 px-3">
                                        <span>
                                            <Tag value='Activity' style={{ backgroundColor: '#5C6BC0' }} rounded></Tag>
                                        </span>
                                        <span>
                                            <p style={{ fontSize: '0.8rem' }} className="m-0">
                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae
                                                numquam deserunt quisquam repellat
                                            </p>
                                        </span>
                                    </div>
                                </Panel>
                                <Panel header="Highlight" style={{ color: '#662C91', marginBottom: 15 }}>
                                    <Carousel value={this.state.products} numVisible={3} numScroll={3} responsiveOptions={this.responsiveOptions} className="custom-carousel" circular
                                        autoplayInterval={3000} itemTemplate={this.productTemplate} showIndicators={false} />
                                </Panel>
                                <Content name={`Pantip Realtime`} data={`กระทู้ที่มีคนเปิดอ่านมากในขณะนี้ อัปเดตทุกนาที`} />
                                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} justifyContent="center">
                                    <Grid spacing={2} xs={8} item>
                                        <Content name={`Pantip Pick`} data={`กระทู้ที่มีคนเปิดอ่านมากในขณะนี้ อัปเดตทุกนาที`} />
                                    </Grid>
                                    <Grid spacing={2} xs={4} item>
                                        <Content name={`แท็กฮิต`} data={`กระทู้ที่มีคนเปิดอ่านมากในขณะนี้ อัปเดตทุกนาที`} />
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <Footer />
            </div>
        );
    }
}
