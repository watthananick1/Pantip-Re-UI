import React from 'react';
import { Carousel, CarouselResponsiveOption } from 'primereact/carousel';
import 'primeicons/primeicons.css';

interface Product {
    id: string;
    icon: string;
    label: string;
}

const AmenitiesBar: React.FC = () => {
    const responsiveOptions: CarouselResponsiveOption[] = [
        {
            breakpoint: '1400px',
            numVisible: 1,
            numScroll: 1
        },
        {
            breakpoint: '1199px',
            numVisible: 2,
            numScroll: 1
        },
        {
            breakpoint: '767px',
            numVisible: 1,
            numScroll: 1
        },
        {
            breakpoint: '575px',
            numVisible: 1,
            numScroll: 1
        }
    ];

    const items: Product[] = [
        {
            id: '1',
            icon: 'pi pi-home',
            label: 'พันทิป',
        },
        {
            id: '2',
            icon: 'pi pi-users',
            label: 'รวมมิตร'
        },
        {
            id: '3',
            icon: 'pi pi-calendar',
            label: ' การ์ตูน'
        },
        {
            id: '4',
            icon: 'pi pi-search',
            label: 'มาบุญคลอง'
        },
        {
            id: '5',
            icon: 'pi pi-globe',
            label: 'ไกลบ้าน'
        },
        {
            id: '6',
            icon: 'pi pi-star',
            label: 'โต๊ะเครื่องแป้ง'
        },
        {
            id: '7',
            icon: 'pi pi-tag',
            label: 'จตุจักร'
        },
        {
            id: '8',
            icon: 'pi pi-tag',
            label: 'บางขุนพรหม'
        },
        {
            id: '9',
            icon: 'pi pi-tag',
            label: 'ก้นครัว'
        },
        {
            id: '10',
            icon: 'pi pi-tag',
            label: 'ชานเรือน'
        },
        {
            id: '11',
            icon: 'pi pi-tag',
            label: 'ซิลิคอนวัลเลย์'
        },
        {
            id: '12',
            icon: 'pi pi-tag',
            label: 'บลูแพลนเน็ต'
        },
        {
            id: '13',
            icon: 'pi pi-tag',
            label: 'ศาลาประชาคม'
        },
    ];

    const productTemplate = (product: Product) => {
        return (
            <div className="p-grid p-nogutter border-1 surface-border border-round m-2 text-center py-5 px-5">
                <div className="p-col mb-2" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', width: '100%' }}>
                    <i className={product.icon} style={{ fontSize: '1rem', marginBottom: '0.1rem' }}></i>
                    <p style={{ marginTop: '0.5rem', fontSize: '0.7rem', marginBottom: '0'}}>{product.label}</p>
                </div>
            </div>
        );
    };

    return (
        <Carousel value={items} numVisible={10} numScroll={10} responsiveOptions={responsiveOptions} itemTemplate={productTemplate} circular={false} showIndicators={false} />
    );
};

export default AmenitiesBar;
