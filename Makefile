.PHONY: dist

dist:
	rm -r dist/latest
	mkdir dist/latest
	cp src/present.html dist/latest/present.html
	cp src/*.meta dist/latest/
	cp src/*.recipe dist/latest/
	cd src && cat sylvester.js purecssmatrix.js jquery.animtrans.js jquery.zoomooz.js jquery.touche.js cecily.js  > ../dist/latest/preso2.js
	cd src && cat zoomooz.css cecily.css > ../dist/latest/preso2.css

deploy: dist
	./upload.sh preso2 dist/latest/preso2.js
	./upload.sh preso2 dist/latest/preso2.css
	./upload.sh preso2 dist/latest/present.html