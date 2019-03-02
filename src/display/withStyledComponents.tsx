import React, { Component, ComponentType } from "react";
import {
  DefaultDocumentIProps,
  DocumentProps,
  NextDocumentContext,
} from "next/document";
import { ServerStyleSheet } from "styled-components";

/**
 * Wraps a Next.js Document component and extracts the style sheets from Styled
 * Components.
 *
 * @param Document Next.js Document component or component extending it.
 * @see https://github.com/zeit/next.js/tree/canary/examples/with-styled-components
 */
export function withStyledComponents<
  P extends DefaultDocumentIProps & DocumentProps
>(Document: ComponentType<P>) {
  return class WithStyledComponents extends Component<P> {
    static async getInitialProps(
      context: NextDocumentContext,
    ): Promise<DefaultDocumentIProps> {
      const sheet = new ServerStyleSheet();

      try {
        return WithStyledComponents.getInitialPropsWithSheet(context, sheet);
      } finally {
        sheet.seal();
      }
    }

    private static async getInitialPropsWithSheet(
      context: NextDocumentContext,
      sheet: ServerStyleSheet,
    ) {
      const initialProps = await WithStyledComponents.renderAppAndCollectStyles(
        context,
        sheet,
      );

      return {
        ...initialProps,

        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    }

    private static async renderAppAndCollectStyles(
      context: NextDocumentContext,
      sheet: ServerStyleSheet,
    ) {
      const originalRenderPage = context.renderPage;
      context.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props => sheet.collectStyles(<App {...props} />),
        });

      if (!hasDocumentGetInitialProps(Document)) {
        throw new Error(
          "Component does not have a getInitialProps static method.",
        );
      }

      return Document.getInitialProps(context);
    }

    render() {
      return <Document {...this.props} />;
    }
  };
}

function hasDocumentGetInitialProps<P>(
  Document: ComponentType<P>,
): Document is ComponentType<P> & {
  getInitialProps(
    context: NextDocumentContext,
  ): DefaultDocumentIProps | Promise<DefaultDocumentIProps>;
} {
  return "getInitialProps" in Document;
}
