/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import '@stencil/core';

import '@stencil/redux';


export namespace Components {

  interface WvFeedList {
    'isDebug': string;
    'records': string;
  }
  interface WvFeedListAttributes extends StencilHTMLAttributes {
    'isDebug'?: string;
    'records'?: string;
  }

  interface WvFeed {
    'record': Object;
  }
  interface WvFeedAttributes extends StencilHTMLAttributes {
    'record'?: Object;
  }
}

declare global {
  interface StencilElementInterfaces {
    'WvFeedList': Components.WvFeedList;
    'WvFeed': Components.WvFeed;
  }

  interface StencilIntrinsicElements {
    'wv-feed-list': Components.WvFeedListAttributes;
    'wv-feed': Components.WvFeedAttributes;
  }


  interface HTMLWvFeedListElement extends Components.WvFeedList, HTMLStencilElement {}
  var HTMLWvFeedListElement: {
    prototype: HTMLWvFeedListElement;
    new (): HTMLWvFeedListElement;
  };

  interface HTMLWvFeedElement extends Components.WvFeed, HTMLStencilElement {}
  var HTMLWvFeedElement: {
    prototype: HTMLWvFeedElement;
    new (): HTMLWvFeedElement;
  };

  interface HTMLElementTagNameMap {
    'wv-feed-list': HTMLWvFeedListElement
    'wv-feed': HTMLWvFeedElement
  }

  interface ElementTagNameMap {
    'wv-feed-list': HTMLWvFeedListElement;
    'wv-feed': HTMLWvFeedElement;
  }


  export namespace JSX {
    export interface Element {}
    export interface IntrinsicElements extends StencilIntrinsicElements {
      [tagName: string]: any;
    }
  }
  export interface HTMLAttributes extends StencilHTMLAttributes {}

}
