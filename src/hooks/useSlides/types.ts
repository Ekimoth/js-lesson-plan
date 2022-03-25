export interface SlideObject {
  title?: string;
  headers?: Record<string, string>;
  innerSlides?: SlideObject[];
  codeSnippet?: string;
  text?: string;
}