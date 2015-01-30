##Buto Web Component powered by Polymer

Lightweight embed codes for [Buto](get.buto.tv) (OVP) users to help them embed their video content more elegantly.

###Usage
Declare the following in the `HEAD` tag.
```
<script src="bower_components/webcomponentsjs/webcomponents.min.js"></script>
<link rel="import" href="elements/buto.html" />
```

Add the following to your page:
```
<buto-video id="buto_12345" data-config='{"object_id":"12345","element_id":"buto_12345","width":"500px", "height":"300px","route":"video"}'></buto-video>

```

The webcomponent supports the following configuration options:

| Name  | Description  | Required |
|---|---|
| object_id  | video/playlist identifier  | Yes
| element_id  | custom DOM element id  | Yes
| width | player width | No
| height | player height | No

###Compatibility
Supported by most evergreen browsers.
See [Polymer compatibility page](https://www.polymer-project.org/resources/compatibility.html) for more details.
