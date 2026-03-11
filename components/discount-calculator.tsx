"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"

export function DiscountCalculator() {
  const [price, setPrice] = useState("")
  const [discount, setDiscount] = useState("")

  const priceNum = parseFloat(price) || 0
  const discountNum = parseFloat(discount) || 0
  const savings = priceNum * (discountNum / 100)
  const finalPrice = priceNum - savings

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <label className="text-sm font-medium text-foreground">Original Price</label>
        <Input
          type="number"
          placeholder="e.g. 99.99"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
      </div>
      <div className="space-y-2">
        <label className="text-sm font-medium text-foreground">Discount (%)</label>
        <Input
          type="number"
          placeholder="e.g. 20"
          value={discount}
          onChange={(e) => setDiscount(e.target.value)}
        />
      </div>

      {priceNum > 0 && discountNum > 0 && (
        <div className="rounded-lg border border-border p-4 space-y-3">
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">You Save</span>
            <span className="font-semibold text-green-600">${savings.toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-sm border-t border-border pt-3">
            <span className="text-muted-foreground">Final Price</span>
            <span className="font-bold text-foreground text-lg">${finalPrice.toFixed(2)}</span>
          </div>
        </div>
      )}
    </div>
  )
}
