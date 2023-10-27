import Document, { Html, Head, Main, NextScript } from "next/document";
import { StyledBody } from "../components/styled-body";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        <StyledBody>
          <Main />
          <NextScript />
        </StyledBody>
      </Html>
    );
  }
}

export default MyDocument;
