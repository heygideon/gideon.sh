---
title: An app to order and collect prescriptions from lockers.
subtitle: Saving time + freeing up pharmacies for those who need it most.
for: PA Raspberry Pi Competition
year: 2025
month: 05

image:
  id: pa-raspberry-pi-cover
  alt: A screenshot of the app
---

I took part in the 2025 [PA Raspberry Pi Competition](https://www.paconsulting.com/culture/pa-in-the-community/raspberry-pi-competition-uk) with two others from my school.
Together, we built a prescription collection system using a Raspberry Pi, a web app, a mobile app, and lockers.

The system allows patients to order their prescriptions online, and pharmacies can securely store them in lockers. When a patient arrives, the patient opens the app, verifies their postcode, and swipes to open the locker.

Compared to collecting in person:

- **Saves time** - Patients can collect their prescriptions in under 30 seconds, compared to a 10-to-15-minute wait at a pharmacy.
- **Frees up pharmacies** - Prescriptions can be prepared ahead-of-time, so pharmacists can focus on helping people in-person.

Compared to sending pick-up QR codes:

- **Easier for patients** - Patients don't need to find a QR code in an email or text message, or remember to turn their brightness up on their phone. They just swipe on their phone.
- **More secure** - QR codes can be shared or photographed. The app verifies identity right before collection, and uses Bluetooth to ensure the patient is near the locker.

I was responsible for the software - that's the mobile app, web app, and database to store orders and locker codes. My teammates built the locker itself using a Raspberry Pi, relays and solenoid locks, plus the Bluetooth server to communicate with the app.

## Result

- We won the Y10-11 Innovation Award on the day, which was pretty cool!
- It was amazing to see people showing genuine interest in what we'd made

The code is open-source [here](https://github.com/heygideon/rpi-prescription).
