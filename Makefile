.PHONY: dist

dist:
	rm -r dist/latest
	mkdir dist/latest
	cd src && cat present.html.meta present.html  > ../dist/latest/present.tid
	cd src && cat zoomooz.css cecily.css > ../dist/latest/preso2.css
	cp src/preso2.js.js.meta dist/latest/
	cp src/*.recipe dist/latest/
	cd src && cat sylvester.js purecssmatrix.js jquery.animtrans.js jquery.zoomooz.js jquery.touche.js cecily.js  > ../dist/latest/preso2.js.js
	cd src && cat zoomooz.css cecily.css > ../dist/latest/preso2.css

deploy: dist
	./upload.sh -t preso2package preso2 dist/latest/preso2.js.js
	./upload.sh -t preso2package preso2 dist/latest/preso2.css
	./upload.sh -t preso2package preso2 dist/latest/present.tid