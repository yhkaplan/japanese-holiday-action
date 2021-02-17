install_vercel:
	npm i -g @vercel/ncc

build:
	ncc build index.js --license licenses.txt
