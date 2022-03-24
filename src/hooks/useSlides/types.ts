export interface SlideObject {
  headers?: Record<string, string>;
  innerSlides?: SlideObject[];
  codeSnippet?: string;
  text?: string;
}