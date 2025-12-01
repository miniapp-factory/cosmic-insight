"use client";

import { Card } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

type ScoreTableProps = {
  score: number;
  total: number;
  level: number;
};

export default function ScoreTable({
  score,
  total,
  level,
}: ScoreTableProps) {
  return (
    <Card className="p-4 max-w-md">
      <h3 className="text-lg font-semibold mb-2">Level {level} Completed</h3>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Metric</TableHead>
            <TableHead>Value</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>Score</TableCell>
            <TableCell>
              {score} / {total}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Percentage</TableCell>
            <TableCell>
              {((score / total) * 100).toFixed(1)}%
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </Card>
  );
}
