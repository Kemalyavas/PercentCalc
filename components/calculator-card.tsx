"use client"

import { useState } from "react"
import { ArrowUp, ArrowDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

interface CalculatorCardProps {
  title: string
  type: "percentage-of" | "what-percent" | "percentage-change"
}

export function CalculatorCard({ title, type }: CalculatorCardProps) {
  const [value1, setValue1] = useState("")
  const [value2, setValue2] = useState("")
  const [result, setResult] = useState<string | null>(null)
  const [isIncrease, setIsIncrease] = useState<boolean | null>(null)

  const calculate = () => {
    const num1 = parseFloat(value1)
    const num2 = parseFloat(value2)

    if (isNaN(num1) || isNaN(num2)) {
      setResult("Enter valid numbers")
      setIsIncrease(null)
      return
    }

    switch (type) {
      case "percentage-of":
        // What is X% of Y?
        setResult(((num1 / 100) * num2).toFixed(2))
        setIsIncrease(null)
        break
      case "what-percent":
        // X is what % of Y?
        if (num2 === 0) {
          setResult("Cannot divide by zero")
        } else {
          setResult(((num1 / num2) * 100).toFixed(2) + "%")
        }
        setIsIncrease(null)
        break
      case "percentage-change":
        // Percentage change from X to Y
        if (num1 === 0) {
          setResult("Cannot calculate from zero")
          setIsIncrease(null)
        } else {
          const change = ((num2 - num1) / Math.abs(num1)) * 100
          setResult(Math.abs(change).toFixed(2) + "%")
          setIsIncrease(change >= 0)
        }
        break
    }
  }

  const getInputLabels = () => {
    switch (type) {
      case "percentage-of":
        return { label1: "Percentage (%)", label2: "Of value", placeholder1: "e.g. 25", placeholder2: "e.g. 200" }
      case "what-percent":
        return { label1: "Value", label2: "Of total", placeholder1: "e.g. 50", placeholder2: "e.g. 200" }
      case "percentage-change":
        return { label1: "From", label2: "To", placeholder1: "e.g. 100", placeholder2: "e.g. 150" }
    }
  }

  const labels = getInputLabels()

  return (
    <div className="rounded-xl border border-border bg-card p-6">
      <h3 className="mb-6 text-lg font-medium text-card-foreground">{title}</h3>
      
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <label className="text-sm text-muted-foreground">{labels.label1}</label>
          <Input
            type="number"
            placeholder={labels.placeholder1}
            value={value1}
            onChange={(e) => setValue1(e.target.value)}
            className="bg-background"
          />
        </div>
        
        <div className="flex flex-col gap-2">
          <label className="text-sm text-muted-foreground">{labels.label2}</label>
          <Input
            type="number"
            placeholder={labels.placeholder2}
            value={value2}
            onChange={(e) => setValue2(e.target.value)}
            className="bg-background"
          />
        </div>
        
        <Button 
          onClick={calculate}
          className="mt-2 w-full"
        >
          Calculate
        </Button>
        
        {result !== null && (
          <div className="mt-4 rounded-lg bg-muted p-4">
            <p className="text-sm text-muted-foreground">Result</p>
            <div className="flex items-center gap-2">
              {type === "percentage-change" && isIncrease !== null && (
                isIncrease ? (
                  <ArrowUp className="h-5 w-5 text-emerald-600" />
                ) : (
                  <ArrowDown className="h-5 w-5 text-red-500" />
                )
              )}
              <p className="text-2xl font-bold text-card-foreground">{result}</p>
              {type === "percentage-change" && isIncrease !== null && (
                <span className={`text-sm font-medium ${isIncrease ? "text-emerald-600" : "text-red-500"}`}>
                  {isIncrease ? "increase" : "decrease"}
                </span>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
