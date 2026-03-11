"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const TIP_PRESETS = [10, 15, 18, 20, 25]

export function TipCalculator() {
  const [bill, setBill] = useState("")
  const [tipPercent, setTipPercent] = useState(15)
  const [people, setPeople] = useState("1")

  const billNum = parseFloat(bill) || 0
  const peopleNum = parseInt(people) || 1
  const tipAmount = billNum * (tipPercent / 100)
  const total = billNum + tipAmount
  const perPerson = total / peopleNum

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <label className="text-sm font-medium text-foreground">Bill Amount</label>
        <Input
          type="number"
          placeholder="e.g. 85.50"
          value={bill}
          onChange={(e) => setBill(e.target.value)}
        />
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium text-foreground">Tip Percentage</label>
        <div className="flex flex-wrap gap-2">
          {TIP_PRESETS.map((pct) => (
            <Button
              key={pct}
              variant={tipPercent === pct ? "default" : "outline"}
              size="sm"
              onClick={() => setTipPercent(pct)}
            >
              {pct}%
            </Button>
          ))}
        </div>
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium text-foreground">Split Between</label>
        <Input
          type="number"
          min="1"
          placeholder="1"
          value={people}
          onChange={(e) => setPeople(e.target.value)}
        />
      </div>

      {billNum > 0 && (
        <div className="rounded-lg border border-border p-4 space-y-3">
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Tip Amount</span>
            <span className="font-semibold text-foreground">${tipAmount.toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Total</span>
            <span className="font-semibold text-foreground">${total.toFixed(2)}</span>
          </div>
          {peopleNum > 1 && (
            <div className="flex justify-between text-sm border-t border-border pt-3">
              <span className="text-muted-foreground">Per Person</span>
              <span className="font-semibold text-foreground">${perPerson.toFixed(2)}</span>
            </div>
          )}
        </div>
      )}
    </div>
  )
}
