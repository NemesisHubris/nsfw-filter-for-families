# <img src="demo/images/logo-mark.svg" width="34" align="middle" alt=""> NSFW Filter for Families

> [!NOTE]
> NSFW Filter for Families is my personal, parent-focused build of [NSFW Filter](https://github.com/nsfw-filter/nsfw-filter). It combines my custom changes and is not intended to be merged back into the original repository.

An open-source, on-device adult-content filter designed for parents setting up a family browser.

Images are classified on your device with TensorFlow.js. Nothing is uploaded, and no data leaves your browser.

NSFW Filter for Families ships two models you can switch between in the popup: a small, accurate Vision Transformer (ViT-384) that classifies images as safe or not safe (the default), and the original [NSFWJS](https://github.com/infinitered/nsfwjs) MobileNet model.

The [Chrome Web Store version](https://chrome.google.com/webstore/detail/nsfw-filter/kmgagnlkckiamnenbpigfaljmanlbbhh) is the original release and does not include these personal changes.

![Demo of NSFW Filter extension in action.](demo/images/demo.gif)

# What I added

These additions build on the original NSFW Filter:

- **Password-protected settings:** an optional password or PIN protects filter settings and the allowed-sites list. “Lock now” locks every open settings page.
- **Browser-policy guidance:** a warning and bundled help explain how to prevent disabling or removing the extension. The warning disappears when the browser confirms force-install protection.
- **Separate strictness controls:** independent sliders for images and videos, including video posters. Existing users keep their previous strictness when upgrading.
- **More image coverage:** detection for canvas drawings, images inside open shadow DOM, SVG images, and responsive images that change with the page layout.
- **More background coverage:** detection for CSS pseudo-element backgrounds, including previews that use them.
- **Animated-image checks:** sample additional frames instead of relying only on the first still image.
- **Embedded-media coverage:** extend filtering into embedded frames and supported blank or generated frames.
- **Video and changing-media fixes:** improve handling of previews, seeking, source changes, and content that changes after loading; reduce flashes before filtering.
- **Page-compatibility fixes:** restore original page styles, clear stale background blocks after elements shrink, and avoid repeatedly retrying unavailable video frames.
- **Family-focused presentation:** a new name, links to this repository for feedback, and a personal Ko-fi support link.

# Usage

To use this personal build, [build from source](#development), then open `chrome://extensions`, enable **Developer mode**, select **Load unpacked**, and choose the `dist` directory.

When you load web pages, NSFW Filter for Families will first hide all images and only show those classified as safe.

Click the icon in your extensions tab to open the popup. From there you can turn protection on or off, adjust how strict the filter is, choose how flagged images are handled (blur, grayscale, or hide), pick which model does the classifying, and allow specific sites.

Set an optional password or PIN under **Advanced** to lock filter settings. A password does not prevent disabling or removing the extension; see [Chrome's force-install policy](https://chromeenterprise.google/policies/extension-install-forcelist/) for that.

![NSFW Filter popup](demo/images/popup-window.png)

# License and attribution

Based on [NSFW Filter](https://github.com/nsfw-filter/nsfw-filter) by Navendu Pottekkat and its contributors. This modified version remains under [GPL-3.0-only](LICENSE); personal changes and branding updated September 22, 2026. Original author and contributor credits are retained below.

[Support this personal version on Ko-fi](https://ko-fi.com/kindlemodshelfguy).

# Development

Install dependencies by running:

```bash
npm install
```

Then build the project:

```bash
npm run build
```

To run the tests:

```bash
npm run test
```

To develop with live reload, start a watch build that rebuilds on every change:

```bash
npm run dev
```

Then, in a separate terminal, launch Chromium with the extension loaded. It reloads automatically as the build updates:

```bash
npm run start:chrome
```

To load the build manually instead, open Google Chrome and open the **Extensions** page by navigating to `chrome://extensions` or by opening **Settings** and clicking **Extensions** from the bottom left.

Enable **Developer Mode** by clicking the toggle switch.

Click the **Load Unpacked** button and select the extension directory (`.../dist`).

![Load extension to Chrome in Developer Mode.](./demo/images/install-instructions.png)

# Contribute

Please check the [**Contributor Guidelines**](https://github.com/nsfw-filter/nsfw-filter/blob/master/CONTRIBUTING.md) before contributing.

Thanks to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)) for helping build and maintain NSFW Filter:

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tbody>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/YegorZaremba"><img src="https://avatars3.githubusercontent.com/u/31797554?v=4?s=100" width="100px;" alt="Yegor <3"/><br /><sub><b>Yegor <3</b></sub></a><br /><a href="https://github.com/nsfw-filter/nsfw-filter/commits?author=YegorZaremba" title="Code">💻</a> <a href="#design-YegorZaremba" title="Design">🎨</a> <a href="#ideas-YegorZaremba" title="Ideas, Planning, & Feedback">🤔</a></td>
      <td align="center" valign="top" width="14.28%"><a href="http://navendu.me"><img src="https://avatars1.githubusercontent.com/u/49474499?v=4?s=100" width="100px;" alt="Navendu Pottekkat"/><br /><sub><b>Navendu Pottekkat</b></sub></a><br /><a href="https://github.com/nsfw-filter/nsfw-filter/commits?author=navendu-pottekkat" title="Code">💻</a> <a href="#content-navendu-pottekkat" title="Content">🖋</a> <a href="https://github.com/nsfw-filter/nsfw-filter/commits?author=navendu-pottekkat" title="Documentation">📖</a> <a href="#design-navendu-pottekkat" title="Design">🎨</a> <a href="#ideas-navendu-pottekkat" title="Ideas, Planning, & Feedback">🤔</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/anonacc"><img src="https://avatars3.githubusercontent.com/u/64102225?v=4?s=100" width="100px;" alt="anonacc"/><br /><sub><b>anonacc</b></sub></a><br /><a href="https://github.com/nsfw-filter/nsfw-filter/issues?q=author%3Aanonacc" title="Bug reports">🐛</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/abhirammltr"><img src="https://avatars1.githubusercontent.com/u/32649851?v=4?s=100" width="100px;" alt="Abhiram V V"/><br /><sub><b>Abhiram V V</b></sub></a><br /><a href="https://github.com/nsfw-filter/nsfw-filter/commits?author=abhirammltr" title="Code">💻</a> <a href="https://github.com/nsfw-filter/nsfw-filter/issues?q=author%3Aabhirammltr" title="Bug reports">🐛</a> <a href="#ideas-abhirammltr" title="Ideas, Planning, & Feedback">🤔</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/yxlin118"><img src="https://avatars1.githubusercontent.com/u/54916304?v=4?s=100" width="100px;" alt="yxlin118"/><br /><sub><b>yxlin118</b></sub></a><br /><a href="https://github.com/nsfw-filter/nsfw-filter/issues?q=author%3Ayxlin118" title="Bug reports">🐛</a> <a href="#ideas-yxlin118" title="Ideas, Planning, & Feedback">🤔</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://clay.sh"><img src="https://avatars3.githubusercontent.com/u/16675291?v=4?s=100" width="100px;" alt="Clay McGinnis"/><br /><sub><b>Clay McGinnis</b></sub></a><br /><a href="https://github.com/nsfw-filter/nsfw-filter/pulls?q=is%3Apr+reviewed-by%3AClayMav" title="Reviewed Pull Requests">👀</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://www.youtube.com/channel/UCPGv2tVqEt6iBFnnMTjnRBA"><img src="https://avatars1.githubusercontent.com/u/6668371?v=4?s=100" width="100px;" alt="Brady Dowling"/><br /><sub><b>Brady Dowling</b></sub></a><br /><a href="#ideas-bradydowling" title="Ideas, Planning, & Feedback">🤔</a></td>
    </tr>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="http://littlebluelabs.com"><img src="https://avatars2.githubusercontent.com/u/32261?v=4?s=100" width="100px;" alt="Mike Crittenden"/><br /><sub><b>Mike Crittenden</b></sub></a><br /><a href="https://github.com/nsfw-filter/nsfw-filter/commits?author=mikecrittenden" title="Documentation">📖</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/garfieldbanks"><img src="https://avatars3.githubusercontent.com/u/12904270?v=4?s=100" width="100px;" alt="garfieldbanks"/><br /><sub><b>garfieldbanks</b></sub></a><br /><a href="https://github.com/nsfw-filter/nsfw-filter/issues?q=author%3Agarfieldbanks" title="Bug reports">🐛</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/TitusRobyK"><img src="https://avatars1.githubusercontent.com/u/32787952?v=4?s=100" width="100px;" alt="Titus Roby K"/><br /><sub><b>Titus Roby K</b></sub></a><br /><a href="https://github.com/nsfw-filter/nsfw-filter/issues?q=author%3ATitusRobyK" title="Bug reports">🐛</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/hsusanoo"><img src="https://avatars2.githubusercontent.com/u/35850056?v=4?s=100" width="100px;" alt="Haitam"/><br /><sub><b>Haitam</b></sub></a><br /><a href="https://github.com/nsfw-filter/nsfw-filter/issues?q=author%3Ahsusanoo" title="Bug reports">🐛</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/lizhendong128"><img src="https://avatars3.githubusercontent.com/u/24618122?v=4?s=100" width="100px;" alt="lizhendong128"/><br /><sub><b>lizhendong128</b></sub></a><br /><a href="https://github.com/nsfw-filter/nsfw-filter/issues?q=author%3Alizhendong128" title="Bug reports">🐛</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/Woctor-Dho"><img src="https://avatars3.githubusercontent.com/u/25572322?v=4?s=100" width="100px;" alt="Woctor-Dho"/><br /><sub><b>Woctor-Dho</b></sub></a><br /><a href="#ideas-Woctor-Dho" title="Ideas, Planning, & Feedback">🤔</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/miaokun-normal"><img src="https://avatars2.githubusercontent.com/u/67724210?v=4?s=100" width="100px;" alt="miaokun-normal"/><br /><sub><b>miaokun-normal</b></sub></a><br /><a href="https://github.com/nsfw-filter/nsfw-filter/issues?q=author%3Amiaokun-normal" title="Bug reports">🐛</a></td>
    </tr>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="https://christopher-bradshaw.com"><img src="https://avatars1.githubusercontent.com/u/1205871?v=4?s=100" width="100px;" alt="Christopher Bradshaw"/><br /><sub><b>Christopher Bradshaw</b></sub></a><br /><a href="https://github.com/nsfw-filter/nsfw-filter/issues?q=author%3Akitsune7" title="Bug reports">🐛</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/wingman-jr-addon"><img src="https://avatars3.githubusercontent.com/u/55339824?v=4?s=100" width="100px;" alt="wingman-jr-addon"/><br /><sub><b>wingman-jr-addon</b></sub></a><br /><a href="#ideas-wingman-jr-addon" title="Ideas, Planning, & Feedback">🤔</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/Andrewrick1"><img src="https://avatars2.githubusercontent.com/u/31154843?v=4?s=100" width="100px;" alt="Sagar paul"/><br /><sub><b>Sagar paul</b></sub></a><br /><a href="https://github.com/nsfw-filter/nsfw-filter/commits?author=Andrewrick1" title="Documentation">📖</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/govza"><img src="https://avatars0.githubusercontent.com/u/1425574?v=4?s=100" width="100px;" alt="Rasul"/><br /><sub><b>Rasul</b></sub></a><br /><a href="https://github.com/nsfw-filter/nsfw-filter/issues?q=author%3Agovza" title="Bug reports">🐛</a> <a href="https://github.com/nsfw-filter/nsfw-filter/commits?author=govza" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/Gother01"><img src="https://avatars2.githubusercontent.com/u/65875436?v=4?s=100" width="100px;" alt="Aldulkadir Beceri"/><br /><sub><b>Aldulkadir Beceri</b></sub></a><br /><a href="https://github.com/nsfw-filter/nsfw-filter/issues?q=author%3AGother01" title="Bug reports">🐛</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://portfolio.silloi.com/"><img src="https://avatars.githubusercontent.com/u/38321101?v=4?s=100" width="100px;" alt="silloi"/><br /><sub><b>silloi</b></sub></a><br /><a href="#ideas-silloi" title="Ideas, Planning, & Feedback">🤔</a> <a href="https://github.com/nsfw-filter/nsfw-filter/issues?q=author%3Asilloi" title="Bug reports">🐛</a> <a href="https://github.com/nsfw-filter/nsfw-filter/commits?author=silloi" title="Code">💻</a></td>
    </tr>
  </tbody>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind are welcome!
