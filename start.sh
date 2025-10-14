#!/bin/bash
cd client
npm install --legacy-peer-deps
npm run build
npm run serve
