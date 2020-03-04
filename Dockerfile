FROM singlespa/import-map-deployer

ENV HTTP_USERNAME= HTTP_PASSWORD=

COPY conf.js /www/

CMD ["yarn", "start", "conf.js"]
