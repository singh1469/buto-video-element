[![Build Status](https://travis-ci.org/singh1469/buto-video-element.svg?branch=master)](https://travis-ci.org/singh1469/buto-video-element)
##Buto Web Component powered by Polymer

Lightweight embed codes for [Buto](http://get.buto.tv) (OVP) users to help them embed their video content more elegantly.

###Usage
Install the component using [Bower](http://bower.io)
```
bower install buto-video-element
```

```
<!-- Include a Web Components polyfill -->
<script src="bower_components/webcomponentsjs/webcomponents.min.js"></script>
<link rel="import" href="bower_components/buto-video-element/buto-video-element.html" />
```

Usage:
```
<buto-video id="buto_12345" data-config='{"object_id":"12345","element_id":"buto_12345","width":"500px", "height":"300px","route":"video"}'></buto-video>
```

The webcomponent supports the following configuration options:

| Name  | Description  | Required |
|---|---|---|
| object_id  | video/playlist identifier  | Yes
| element_id  | custom DOM element id  | Yes
| width | player width | No
| height | player height | No
|route | video=video,playlist=playlist | Yes

###Compatibility
Supported by most evergreen browsers.
See [Polymer compatibility page](https://www.polymer-project.org/resources/compatibility.html) for more details.
