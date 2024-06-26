FROM ubuntu:22.04

LABEL maintainer="Dellear<https://github.com/Dellear>"

ENV TZ=Asia/Shanghai

RUN apt update -y \
    && DEBIAN_FRONTEND="noninteractive" apt install curl tzdata -y \
    && ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone \
    && apt-get install -y libglib2.0-0 libnss3 libdbus-1-3 libatk1.0-0 libatk-bridge2.0 libcups2 libdrm2 libxcomposite1 libxdamage1 libxrandr2 libgbm1 libxkbcommon-x11-0 libpango1.0-0 libasound2 \
    && curl -fsSL https://deb.nodesource.com/setup_20.x | bash - \
    && apt-get install nodejs -y \
    && rm -rf /var/lib/apt/lists/*

CMD ["bash"]