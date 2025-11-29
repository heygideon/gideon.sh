# gideon.sh

Welcome - this is my little corner of the interwebs! Made for Hack Club's [personal site YSWS](https://page.hackclub.com).

| Before | ✨ After |
| ------ | -------- |
| <img width="2360" height="1640" alt="website-old" src="https://github.com/user-attachments/assets/5e831430-1c82-49ef-9d59-8ff048e0993d" /> | <img width="2360" height="1640" alt="website-new" src="https://github.com/user-attachments/assets/6bad4114-5d28-42ae-a729-1fd7267d504b" /> |


## New things

- a serif font and warm colours
- a cutesy cat that you can click on
- custom window management - open, close, minimise, drag around
- custom router - you can refresh the page and the current window stays open
- a section for friends' 88x31 buttons
- online/offline status, from slack
- your real battery level in the taskbar (chrome/edge)
- the date and time in the UK, with the day first, as it should be

and... a drum machine?

- yup, a kinda-functional drum sequencer!
- change the tempo and speed, switch drumkits, mute/solo instruments
- hi-hat open and close work properly
- a little visualiser

---

## Development

Once you've created a project and installed dependencies with `pnpm install`, start a development server:

```sh
pnpm run dev

# or start the server and open the app in a new browser tab
pnpm run dev -- --open
```

To create a production version:

```sh
pnpm run build
```

You can preview the production build with `pnpm run preview`.

> [!NOTE]
> If pnpm isn't installed already, run this (with Node.js installed) to set up corepack first:
>
> ```sh
> npm install -g corepack
> corepack enable
> ```

## Credits

### Made with

- SvelteKit, Tailwind CSS
- font: Crimson Pro (serif), Departure Mono (pixel)
- icons: [Phosphor Icons](https://phosphoricons.com/)
- window manager: [Neodrag](https://next.neodrag.dev/) for dragging
- drum machine: [Tone.js](https://github.com/Tonejs/Tone.js), samples from [Drumhaus](https://github.com/mxfng/drumhaus/tree/main/public/samples) and [Cymatics](https://cymatics.fm/pages/free-download-vault)
- sound effects: from [Zapsplat](https://www.zapsplat.com/)

### Inspiration

- [sharyap.com](https://www.sharyap.com/) - windowing, sound effects. really fun website, you should go check it out 🙂
- [posthog.com](https://posthog.com/) - windowing
- [drumha.us](https://drumha.us) and [drumbit.app](https://drumbit.app/) - drum machine design
