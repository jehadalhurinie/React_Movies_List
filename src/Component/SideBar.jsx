import React from 'react';
import { Card } from 'react-bootstrap';

const Sidebar = () => {
  return (
    <aside style={{ width: '100%', backgroundColor: '#f1f1f1', padding: '15px', borderRadius: '10px' }}>
      <h5 className="mb-3 text-center fw-bold">📢 إعلانات</h5>

      <Card className="mb-3 shadow-sm">
        <Card.Img variant="top" src="https://via.placeholder.com/300x150?text=إعلان+1" />
        <Card.Body>
          <Card.Text className="text-center">إعلان مميز 1</Card.Text>
        </Card.Body>
      </Card>

      <Card className="mb-3 shadow-sm">
        <Card.Img variant="top" src="https://via.placeholder.com/300x150?text=إعلان+2" />
        <Card.Body>
          <Card.Text className="text-center">إعلان خاص بالعروض</Card.Text>
        </Card.Body>
      </Card>

      <Card className="mb-3 shadow-sm">
        <Card.Img variant="top" src="https://via.placeholder.com/300x150?text=إعلان+3" />
        <Card.Body>
          <Card.Text className="text-center">تابعنا لكل جديد</Card.Text>
        </Card.Body>
      </Card>
    </aside>
  );
};

export default Sidebar;
