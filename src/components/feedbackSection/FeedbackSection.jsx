import React from "react";
import { Container, Form, Button } from "react-bootstrap";

const FeedbackSection = () => {
  return (
    <section className="feedback-section">
      <Container className="mt-5 mb-5">
        <h2 className="text-center mb-4 fw-bold text-secondary">
          মতামত এবং পরামর্শ
        </h2>
        <p className="text-center mb-4">
          আপনি যদি আমাদের ওয়েবসাইট সম্পর্কে কোনো মতামত বা পরামর্শ থাকে, তাহলে
          নিচের ফর্মটি পূর্ণ করে আমাদের জানাতে পারেন।
        </p>

        <Form>
          <Form.Group controlId="formBasicName">
            <Form.Label>নাম</Form.Label>
            <Form.Control type="text" placeholder="আপনার নাম" />
          </Form.Group>

          <Form.Group controlId="formBasicEmail">
            <Form.Label>ইমেল</Form.Label>
            <Form.Control type="email" placeholder="আপনার ইমেল" />
          </Form.Group>

          <Form.Group controlId="formBasicMessage">
            <Form.Label>মেসেজ</Form.Label>
            <Form.Control as="textarea" rows={3} placeholder="আপনার মেসেজ" />
          </Form.Group>

          <div className="d-grid gap-2 col-6 mx-auto">
            <Button className="fw-bold mt-3" variant="secondary">
              সাবমিট
            </Button>
          </div>
        </Form>
      </Container>
    </section>
  );
};

export default FeedbackSection;
