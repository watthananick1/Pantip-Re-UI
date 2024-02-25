import React, { Component } from 'react';
import { Button } from 'primereact/button';
import { Card } from 'primereact/card';

export default class FooterComponent extends Component {
  render() {
    return (
      <div>
        <Card title="Links" subTitle="Navigate" className="p-mb-2">
          <a style={{ marginRight: '0.5rem' }}  href="/" className="p-mr-2">หน้าแรก</a>
          <a style={{ marginRight: '0.5rem' }}  href="/about" className="p-mr-2">เกี่ยวกับ</a>
          <a style={{ marginRight: '0.5rem' }}  href="/contact" className="p-mr-2">ติดต่อ</a>
          <a style={{ marginRight: '0.5rem' }}  href="/terms" className="p-mr-2">เงื่อนไขการใช้งาน</a>
        </Card>
        <Card title="Contact Info" subTitle="Get in touch" className="p-mb-2">
          <p>ติดต่อ: contact@example.com</p>
          <p>เบอร์โทร: 123-456-7890</p>
        </Card>
        <Card title="Social Media" subTitle="Connect with us" className="p-mb-2 m-3">
          <Button icon="pi pi-facebook" className="p-button-raised p-button-rounded p-mr-3" style={{ marginRight: '0.5rem', backgroundColor: '#662C91' }} />
          <Button icon="pi pi-twitter" className="p-button-raised p-button-rounded p-mr-3" style={{ marginRight: '0.5rem', backgroundColor: '#662C91' }}  />
          <Button icon="pi pi-instagram" className="p-button-raised p-button-rounded p-mr-3" style={{ marginRight: '0.5rem', backgroundColor: '#662C91' }}  />
        </Card>
        <Card title="© 2024 บริษัท ตัวอย่าง" subTitle="สงวนลิขสิทธิ์ทุกประการ" className="p-mb-2" />
      </div>
    );
  }
}
