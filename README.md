# Hynorvixx Landing Page

A modern, responsive landing page built with Next.js, TypeScript, and Tailwind CSS for Hynorvixx's suite of professional development tools.

## Project Overview

This landing page serves as the main entry point for Hynorvixx's product suite, showcasing our services, features, and pricing plans. The design focuses on modern aesthetics, responsiveness, and smooth user interactions.

## Technical Stack

- **Framework**: Next.js 14+
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide Icons
- **Font**: Geist (Sans & Mono variants)

## Project Structure

## Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/en/) (version >= 12.x.x recommended)
- [npm](https://www.npmjs.com/get-npm) (Node package manager)

## Installation

1. **Clone the repository**:
   ```bash
   git clone  https://github.com/BOCK-CHAIN/BockHynorvixx.git
2. **Naviagte to the repository**:
   ```bash
   cd BOCK_SUITE
3. **Instal**:
   ```bash
    npm i
1. **Run**:
   ```bash
   npm run dev


## GCP Deployment Guide (Static Hosting with Nginx)

This guide explains how to deploy a Next.js static site (using `output: 'export'` in `next.config.ts`) on a Google Cloud Platform (GCP) Virtual Machine (VM) with Nginx.

## Prerequisites
- A GCP account and a configured VM instance.
- Basic familiarity with SSH and Linux commands.
- Firewall rules allowing port 80 (HTTP) on your GCP VM.

## Steps

### 0. Install Node.js and npm on GCP VM
Install Node.js and npm to build the Next.js project.

```bash
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt install -y nodejs
```

Verify installation:
```bash
node -v
npm -v
```

### 1. Configure Static Export in `next.config.ts`
Ensure your Next.js project is set up for static export by adding the following to `next.config.ts`:

```ts
const nextConfig = {
  output: 'export',
};

export default nextConfig;
```

### 2. Build the Project on Your GCP VM
Clone or upload your Next.js project to the VM, then build it:

```bash
npm install
npm run build
```

This generates an `out/` folder containing the static site files.

### 3. Install and Configure Nginx
Install Nginx and set it up to serve the static files:

```bash
sudo apt update
sudo apt install nginx -y
sudo systemctl start nginx
sudo systemctl enable nginx
```

Remove default Nginx files and copy the static build:

```bash
sudo rm -rf /var/www/html/*
sudo cp -r out/* /var/www/html/
sudo systemctl restart nginx
```

### 4. Access Your Site
Find your VM's external IP in the GCP Console and visit it in a browser:

```
http://[YOUR_EXTERNAL_IP]
```

> **Note**: Ensure port 80 (HTTP) is open in your GCP VM's firewall settings.

## Troubleshooting
- If the site doesn't load, check Nginx status: `sudo systemctl status nginx`.
- Verify file permissions in `/var/www/html`: `sudo chmod -R 755 /var/www/html`.
- Confirm the `out/` folder contains the static files.



Automation test commit – 10/09/2025
hello