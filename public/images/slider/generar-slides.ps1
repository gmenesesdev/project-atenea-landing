# Script para generar versiones optimizadas de slides
# Requiere sharp-cli v5.x instalado globalmente

For ($i = 1; $i -le 3; $i++) {
    # MOBILE 400w
    sharp resize 400 --input "slide$i.jpeg" --quality 80 --output "slide${i}-mobile.jpeg"
    sharp resize 400 --input "slide$i.webp"  --quality 80 --output "slide${i}-mobile.webp"

    # MOBILE 800w @2x
    sharp resize 800 --input "slide$i.jpeg" --quality 80 --output "slide${i}-mobile@2x.jpeg"
    sharp resize 800 --input "slide$i.webp"  --quality 80 --output "slide${i}-mobile@2x.webp"

    # DESKTOP 1200w
    sharp resize 1200 --input "slide$i.jpeg" --quality 80 --output "slide${i}-desktop.jpeg"
    sharp resize 1200 --input "slide$i.webp"  --quality 80 --output "slide${i}-desktop.webp"

    # DESKTOP 2400w @2x
    sharp resize 2400 --input "slide$i.jpeg" --quality 80 --output "slide${i}-desktop@2x.jpeg"
    sharp resize 2400 --input "slide$i.webp"  --quality 80 --output "slide${i}-desktop@2x.webp"

    Write-Host "✅ Generadas versiones optimizadas de slide$i"
}
